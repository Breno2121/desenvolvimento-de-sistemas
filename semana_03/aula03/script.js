async function addPerson(event) {
    event.preventDefault();
    const nome = document.getElementById("name").value;
    const idade = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("phone").value;
    const endereco = document.getElementById("adress").value;
    const cidade = document.getElementById("city").value;

    if (!nome || !idade || !email || !telefone || !endereco || !cidade) {
        alert("TODOS OS DADOS OBRIGATORIO.")
        return;
    }

    let person = { nome, idade, email, telefone, endereco, cidade }

    await fetch("http://localhost:3000/person", {
        method: 'POST',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json'}
    })

}

async function getPerson(){
    await fetch("http://localhost:3000/person", {
        method: 'GET',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json'}
    })

    const dados = await response.json();
    console.log(dados)

}
