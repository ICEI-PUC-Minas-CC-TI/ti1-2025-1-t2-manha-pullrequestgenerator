// Valida o formulário antes de adicionar ou atualizar
function validateForm() {
    const organizacao = document.getElementById("organizacao").value.trim();
    const repositorio = document.getElementById("repositorio").value.trim();
    const branch_base = document.getElementById("branch_base").value.trim();
    const branch_comparacao = document.getElementById("branch_comparacao").value.trim();

    if (!organizacao || !repositorio || !branch_base || !branch_comparacao) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    return true;
}

// Exibe os dados salvos
function showData() {
    let peopleList = localStorage.getItem("peopleList")
        ? JSON.parse(localStorage.getItem("peopleList"))
        : [];

    let html = "";

    peopleList.forEach((element, index) => {
        html += "<tr>";
        html += `<td>${element.organizacao}</td>`;
        html += `<td>${element.repositorio}</td>`;
        html += `<td>${element.branch_base}</td>`;
        html += `<td>${element.branch_comparacao}</td>`;
        html += `<td>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Excluir</button>
                    <button onclick="updateData(${index})" class="btn btn-warning">Editar</button>
                 </td>`;
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Adiciona novo dado
function addData() {
    if (validateForm()) {
        const organizacao = document.getElementById("organizacao").value;
        const repositorio = document.getElementById("repositorio").value;
        const branch_base = document.getElementById("branch_base").value;
        const branch_comparacao = document.getElementById("branch_comparacao").value;

        let peopleList = localStorage.getItem("peopleList")
            ? JSON.parse(localStorage.getItem("peopleList"))
            : [];

        peopleList.push({
            organizacao,
            repositorio,
            branch_base,
            branch_comparacao,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        clearForm();
        showData();
    }
}

// Exclui dado pelo índice
function deleteData(index) {
    let peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

// Atualiza um item
function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "inline-block";

    let peopleList = JSON.parse(localStorage.getItem("peopleList"));

    document.getElementById("organizacao").value = peopleList[index].organizacao;
    document.getElementById("repositorio").value = peopleList[index].repositorio;
    document.getElementById("branch_base").value = peopleList[index].branch_base;
    document.getElementById("branch_comparacao").value = peopleList[index].branch_comparacao;

    document.getElementById("Update").onclick = function () {
        if (validateForm()) {
            peopleList[index].organizacao = document.getElementById("organizacao").value;
            peopleList[index].repositorio = document.getElementById("repositorio").value;
            peopleList[index].branch_base = document.getElementById("branch_base").value;
            peopleList[index].branch_comparacao = document.getElementById("branch_comparacao").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            clearForm();
            showData();

            document.getElementById("Submit").style.display = "inline-block";
            document.getElementById("Update").style.display = "none";
        }
    };
}

// Limpa o formulário após submit ou update
function clearForm() {
    document.getElementById("organizacao").value = "";
    document.getElementById("repositorio").value = "";
    document.getElementById("branch_base").value = "";
    document.getElementById("branch_comparacao").value = "";
}

// Carrega dados ao abrir a página
window.onload = showData;