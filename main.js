function adicionarLinha() {
    var numero = document.getElementById("numero").value;
    var nome = document.getElementById("nome").value;

    var table = document.getElementById("dataTable");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = numero;
    cell2.innerHTML = nome;
    cell3.innerHTML = '<button class="removeButton" onclick="removerLinha(this)">Remover</button>';

    // Limpar os campos do formulário após adicionar
    document.getElementById("numero").value = "";
    document.getElementById("nome").value = "";
}

function removerLinha(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}