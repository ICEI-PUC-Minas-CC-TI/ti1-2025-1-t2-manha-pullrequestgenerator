$(document).ready(function () {
    showData();

    // Carrega organizações ao iniciar
    $('#githubToken').on('change', function () {
        fetchOrganizations();
    });

    // Popula repositórios ao selecionar uma organização
    $('#organizacao').on('change', function () {
        fetchRepos();
    });

    // Função de autocompletar para repositórios
    $("#repositorio").autocomplete({
        minLength: 0,
        source: function (request, response) {
            // Busca em qualquer posição na string, não apenas no início
            const results = $.grep(allRepos, function (repo) {
                return repo.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results.slice(0, 10)); // Limita a 10 resultados
        },
        select: function (event, ui) {
            $("#repositorio").val(ui.item.value);
            fetchBranches(); // Carregar branches após selecionar um repositório
            return false;
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });

    // Função de autocompletar para branches
    $("#branch_base, #branch_comparacao").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const results = $.grep(allBranches, function (branch) {
                return branch.toLowerCase().includes(request.term.toLowerCase());
            });
            response(results.slice(0, 10)); // Limita a 10 resultados
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });
});

// Arrays globais para armazenar os dados
let allRepos = [];
let allBranches = [];

// Exibe os dados salvos
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
                        <button onclick="deleteData(${index})" class="btn btn-danger">Excluir</button>
                        <button onclick="updateData(${index})" class="btn btn-warning">Editar</button>
                    </td>
                 </tr>`;
    });

    $("#crudTable tbody").html(html);
}

// Adiciona novo dado
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

// Exclui dado pelo índice
function deleteData(index) {
    const peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

// Atualiza um item
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

// Limpa o formulário após submit ou update
function clearForm() {
    $("#organizacao, #repositorio, #branch_base, #branch_comparacao").val("");
}

// Funções para integrações com a API do GitHub
function fetchOrganizations() {
    const token = $('#githubToken').val().trim();

    $.ajax({
        url: 'https://api.github.com/user/orgs',
        headers: { 'Authorization': 'token ' + token }
    })
        .done(function (data) {
            console.log('Organizações recebidas:', data); // Log para ver o que foi retornado
            const orgSelect = $('#organizacao');
            orgSelect.html('<option value="">Selecione a organização</option>');
            data.forEach(org => {
                orgSelect.append(`<option value="${org.login}">${org.login}</option>`);
            });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao carregar organizações:', textStatus, errorThrown);
        });
}

function fetchRepos() {
    const token = $('#githubToken').val().trim();
    const org = $('#organizacao').val().trim();

    if (!org) return;

    $.ajax({
        url: `https://api.github.com/orgs/${org}/repos`,
        headers: { 'Authorization': 'token ' + token }
    })
        .done(function (data) {
            allRepos = data.map(repo => repo.name);
            $("#repositorio").autocomplete("option", "source", allRepos);
            $("#repositorio").val(''); // Limpa campo de repositório quando carregar novos
        })
        .fail(function () {
            console.error('Erro ao carregar repositórios');
        });
}

function fetchBranches() {
    const token = $('#githubToken').val().trim();
    const org = $('#organizacao').val().trim();
    const repo = $('#repositorio').val().trim();

    if (!org || !repo) return;

    $.ajax({
        url: `https://api.github.com/repos/${org}/${repo}/branches`,
        headers: { 'Authorization': 'token ' + token }
    })
        .done(function (data) {
            allBranches = data.map(branch => branch.name);
            $("#branch_base, #branch_comparacao").autocomplete("option", "source", allBranches);
            $("#branch_base, #branch_comparacao").val(''); // Limpa campos de branch quando carregar novos
        })
        .fail(function () {
            console.error('Erro ao carregar branches');
        });
}

// Valida o formulário antes de adicionar ou atualizar 
function validateForm() {
    const organizacao = $("#organizacao").val().trim();
    const repositorio = $("#repositorio").val().trim();
    const branch_base = $("#branch_base").val().trim();
    const branch_comparacao = $("#branch_comparacao").val().trim();

    if (!organizacao || !repositorio || !branch_base || !branch_comparacao) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    return true;
}