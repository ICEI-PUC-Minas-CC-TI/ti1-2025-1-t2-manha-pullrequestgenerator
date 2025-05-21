$(document).ready(function () {
    // Carrega organizações quando o token muda
    $('#githubToken').on('change', function () {
        fetchOrganizations();
    });

    // Carrega repositórios quando a organização muda
    $('#organizacao').on('change', function () {
        loadRepositories($('#organizacao').val().trim());
    });

    // Autocomplete para repositórios
    $("#repositorio").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const results = $.grep(currentRepos.map(r => r.name), function (repo) {
                return repo.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results);
        },
        select: function (event, ui) {
            $("#repositorio").val(ui.item.value);
            fetchBranches();
            return false;
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });

    // Autocomplete para branches
    $("#branch_base, #branch_comparacao").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const results = $.grep(allBranches, function (branch) {
                return branch.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results);
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });
});

let currentRepos = [];
let allBranches = [];

// Busca as organizações do usuário e popula o select
async function fetchOrganizations() {
    const token = $('#githubToken').val().trim();
    if (!token) return;

    try {
        const user = await githubFetch('https://api.github.com/user');
        const orgs = await githubFetch('https://api.github.com/user/orgs');
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

// Carrega os repositórios da organização selecionada
async function loadRepositories(org) {
    const token = $('#githubToken').val().trim();
    if (!token || !org) return;

    try {
        currentRepos = [];
        $('#repositorio').val('');
        $('#repositorio').prop('disabled', true);

        const userData = await githubFetch('https://api.github.com/user');
        const username = userData.login;

        let repos;

        if (org === username) {
            // Repositórios do usuário
            repos = await githubFetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        } else {
            // Repositórios da organização
            repos = await githubFetch(`https://api.github.com/orgs/${org}/repos?per_page=100`);
        }

        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        currentRepos = repos;

        $('#repositorio').prop('disabled', false);
        $("#repositorio").autocomplete("option", "source", currentRepos.map(r => r.name));
    } catch (error) {
        alert('Error loading repositories: ' + error.message);
    }
}

// Busca branches do repositório selecionado
async function fetchBranches() {
    const token = $('#githubToken').val().trim();
    const org = $('#organizacao').val().trim();
    const repo = $('#repositorio').val().trim();

    if (!token || !org || !repo) return;

    try {
        let branches = [];
        let page = 1;
        let fetched;

        do {
            fetched = await githubFetch(`https://api.github.com/repos/${org}/${repo}/branches?per_page=100&page=${page}`);
            branches = branches.concat(fetched);
            page++;
        } while (fetched.length === 100);

        allBranches = branches.map(branch => branch.name);
        $("#branch_base, #branch_comparacao").autocomplete("option", "source", allBranches);
        $("#branch_base, #branch_comparacao").val('');
    } catch (error) {
        alert('Error loading branches: ' + error.message);
    }
}

// Função para chamadas autenticadas à API do GitHub
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

// Valida se todos os campos obrigatórios foram preenchidos
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