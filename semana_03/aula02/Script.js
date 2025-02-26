async function loadProfiles() {
    const name = document.getElementById("name").value;

    if (!name) {
        alert("VOCE NAO DIGITOU O NOME PARA BUSCAR!!!")
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name.toLocaleUpperCase()}`)
    const dados = await response.json();

    console.log(dados)

    const registro = dados[0].res;
    const vetorDecadas2 = registro.map((item) => item.periodo);
    const vetorValores2 = registro.map((item) => item.frequencia);

    if (chart) {
        chart.destroy();
    }
    const ctx = document.getElementById("chart");
    const chart = new chart(ctx, {
        type: `line`,
        data: {
            labels: vetorDecadas2,
            datasets: [{
                label: `Frequencia do nome ${name} por Decada`,
                data: vetorValores2
            }]
        }
    })

}