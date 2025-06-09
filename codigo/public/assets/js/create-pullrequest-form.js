let currentRepos = [], allBranches = [];

async function fetchOrganizations() {
    const token = $("#githubToken").val().trim();
    if (!token) return;

    try {
        const [user, orgs] = await Promise.all([
            githubFetch("https://api.github.com/user"),
            githubFetch("https://api.github.com/user/orgs")
        ]);
        
        $("#organizacao").html('<option value="">Select organization</option>')
            .append([{ login: user.login }, ...orgs]
                .map(org => `<option value="${org.login}">${org.login}</option>`));
    } catch (error) {
        alert("Error loading organizations: " + error.message);
    }
}

async function loadRepositories(org) {
    const token = $("#githubToken").val().trim();
    if (!token || !org) return;

    try {
        currentRepos = [];
        $("#repositorio").val("").prop("disabled", true);

        const user = await githubFetch("https://api.github.com/user");
        const url = org === user.login 
            ? `https://api.github.com/users/${user.login}/repos?per_page=100`
            : `https://api.github.com/orgs/${org}/repos?per_page=100`;

        currentRepos = (await githubFetch(url))
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        $("#repositorio").prop("disabled", false)
            .autocomplete("option", "source", currentRepos.map(r => r.name));
    } catch (error) {
        alert("Error loading repositories: " + error.message);
    }
}

async function fetchBranches() {
    const token = $("#githubToken").val().trim();
    const org = $("#organizacao").val().trim();
    const repo = $("#repositorio").val().trim();
    if (!token || !org || !repo) return;

    try {
        let branches = [], page = 1, fetched;
        do {
            fetched = await githubFetch(
                `https://api.github.com/repos/${org}/${repo}/branches?per_page=100&page=${page++}`
            );
            branches = branches.concat(fetched);
        } while (fetched.length === 100);

        allBranches = branches.map(b => b.name);
        ["#branch_base", "#branch_comparacao"].forEach(selector => {
            $(selector).autocomplete("option", "source", allBranches).val("");
        });
    } catch (error) {
        alert("Error loading branches: " + error.message);
    }
}

function githubFetch(url) {
    return fetch(url, {
        headers: { Authorization: `token ${$("#githubToken").val().trim()}` }
    }).then(res => res.ok ? res.json() : Promise.reject(`GitHub API error: ${res.status}`));
}

function validateForm() {
    const fields = ["organizacao", "repositorio", "branch_base", "branch_comparacao"];
    if (fields.some(field => !$(`#${field}`).val().trim())) {
        alert("All fields must be filled.");
        return false;
    }
    return true;
}

$(function() {
    $("#githubToken").on("change", fetchOrganizations);
    $("#organizacao").on("change", () => loadRepositories($("#organizacao").val().trim()));
    $("#Submit").on("click", e => {
        e.preventDefault();
        if (validateForm()) {
            const store = window.useState();
            window.newJobsProcessor(store).addJob({
                owner: $("#organizacao").val().trim(),
                repo: $("#repositorio").val().trim(),
                githubToken: $("#githubToken").val().trim(),
                baseBranch: $("#branch_base").val().trim(),
                headBranch: $("#branch_comparacao").val().trim()
            });
            window.location.href = "/chat.html";
        }
    });

    $("#repositorio").autocomplete({
        minLength: 0,
        source: (req, res) => res($.grep(
            currentRepos.map(r => r.name), 
            repo => repo.toLowerCase().includes(req.term.toLowerCase())
        ),
        select: (e, ui) => {
            $(e.target).val(ui.item.value);
            fetchBranches();
            return false;
        }
    }).focus(function() { $(this).autocomplete("search", ""); });

    $("#branch_base, #branch_comparacao").autocomplete({
        minLength: 0,
        source: (req, res) => res($.grep(
            allBranches, 
            b => b.toLowerCase().includes(req.term.toLowerCase()))
        )
    }).focus(function() { $(this).autocomplete("search", ""); });
});
