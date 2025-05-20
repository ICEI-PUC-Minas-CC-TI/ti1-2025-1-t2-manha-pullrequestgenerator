$(document).ready(function () {
    showData();

    // Load organizations when token changes
    $('#githubToken').on('change', function () {
        fetchOrganizations();
    });

    // Load repositories when organization changes
    $('#organizacao').on('change', function () {
        loadRepositories($('#organizacao').val().trim());
    });

    // Autocomplete for repositories
    $("#repositorio").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const results = $.grep(currentRepos.map(r => r.name), function (repo) {
                return repo.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results.slice(0, 8)); // Limit to 8 results
        },
        select: function (event, ui) {
            $("#repositorio").val(ui.item.value);
            fetchBranches();
            return false;
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });

    // Autocomplete for branches
    $("#branch_base, #branch_comparacao").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const results = $.grep(allBranches, function (branch) {
                return branch.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results.slice(0, 8));
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });
});

let currentRepos = [];
let allBranches = [];

// Show saved data in table
function showData() {
    const peopleList = localStorage.getItem("peopleList")
        ? JSON.parse(localStorage.getItem("peopleList"))
        : [];

    let html = '';

    peopleList.forEach((element, index) => {
        html += `<tr>
                    <td>${element.organizacao}</td>
                    <td>${element.repositorio}</td>
                    <td>${element.branch_base}</td>
                    <td>${element.branch_comparacao}</td>
                    <td>
                        <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                        <button onclick="updateData(${index})" class="btn btn-warning">Edit</button>
                    </td>
                 </tr>`;
    });

    $("#crudTable tbody").html(html);
}

// Add new data
function addData() {
    if (validateForm()) {
        const organizacao = $("#organizacao").val();
        const repositorio = $("#repositorio").val();
        const branch_base = $("#branch_base").val();
        const branch_comparacao = $("#branch_comparacao").val();

        const peopleList = localStorage.getItem("peopleList")
            ? JSON.parse(localStorage.getItem("peopleList"))
            : [];

        peopleList.push({ organizacao, repositorio, branch_base, branch_comparacao });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        clearForm();
        showData();
    }
}

// Delete data by index
function deleteData(index) {
    const peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

// Update item by index
function updateData(index) {
    $("#Submit").hide();
    $("#Update").show();

    const peopleList = JSON.parse(localStorage.getItem("peopleList"));

    $("#organizacao").val(peopleList[index].organizacao);
    $("#repositorio").val(peopleList[index].repositorio);
    $("#branch_base").val(peopleList[index].branch_base);
    $("#branch_comparacao").val(peopleList[index].branch_comparacao);

    $("#Update").off('click').on('click', function () {
        if (validateForm()) {
            peopleList[index].organizacao = $("#organizacao").val();
            peopleList[index].repositorio = $("#repositorio").val();
            peopleList[index].branch_base = $("#branch_base").val();
            peopleList[index].branch_comparacao = $("#branch_comparacao").val();

            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            clearForm();
            showData();

            $("#Submit").show();
            $("#Update").hide();
        }
    });
}

// Clear form after submit or update
function clearForm() {
    $("#organizacao, #repositorio, #branch_base, #branch_comparacao").val("");
}

// Fetch organizations including the logged-in user
async function fetchOrganizations() {
    const token = $('#githubToken').val().trim();
    if (!token) return;

    try {
        // Get user info
        const user = await githubFetch('https://api.github.com/user');

        // Get organizations of the user
        const orgs = await githubFetch('https://api.github.com/user/orgs');

        // Include the user as an option (personal repos)
        const organizations = [{ login: user.login, name: user.login }, ...orgs];

        const orgSelect = $('#organizacao');
        orgSelect.html('<option value="">Select organization</option>');
        organizations.forEach(org => {
            orgSelect.append(`<option value="${org.login}">${org.login}</option>`);
        });
    } catch (error) {
        alert('Error loading organizations: ' + error.message);
    }
}

// Fetch repositories depending on organization or user
async function loadRepositories(org) {
    const token = $('#githubToken').val().trim();
    if (!token || !org) return;

    try {
        currentRepos = [];
        $('#repositorio').val('');
        $('#repositorio').prop('disabled', true);

        // Get logged-in user to compare
        const userData = await githubFetch('https://api.github.com/user');
        const username = userData.login;

        let repos;

        if (org === username) {
            // Fetch personal repos
            repos = await githubFetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        } else {
            // Fetch organization repos
            repos = await githubFetch(`https://api.github.com/orgs/${org}/repos?per_page=100`);
        }

        // Sort repos by updated_at descending and limit to 8
        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        currentRepos = repos.slice(0, 8);

        $('#repositorio').prop('disabled', false);
        $("#repositorio").autocomplete("option", "source", currentRepos.map(r => r.name));
    } catch (error) {
        alert('Error loading repositories: ' + error.message);
    }
}

// Fetch branches for selected repo
function fetchBranches() {
    const token = $('#githubToken').val().trim();
    const org = $('#organizacao').val().trim();
    const repo = $('#repositorio').val().trim();

    if (!token || !org || !repo) return;

    $.ajax({
        url: `https://api.github.com/repos/${org}/${repo}/branches`,
        headers: { 'Authorization': 'token ' + token }
    })
        .done(function (data) {
            allBranches = data.map(branch => branch.name);
            $("#branch_base, #branch_comparacao").autocomplete("option", "source", allBranches);
            $("#branch_base, #branch_comparacao").val('');
        })
        .fail(function () {
            alert('Error loading branches');
        });
}

// Helper to fetch GitHub API with authorization header
function githubFetch(url) {
    const token = $('#githubToken').val().trim();
    return fetch(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            return response.json();
        });
}

// Validate form before submit/update
function validateForm() {
    const organizacao = $("#organizacao").val().trim();
    const repositorio = $("#repositorio").val().trim();
    const branch_base = $("#branch_base").val().trim();
    const branch_comparacao = $("#branch_comparacao").val().trim();

    if (!organizacao || !repositorio || !branch_base || !branch_comparacao) {
        alert("All fields must be filled.");
        return false;
    }

    return true;
}