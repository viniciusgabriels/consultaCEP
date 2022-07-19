const cep = document.querySelector("#cep");

const showData = (result) => {
    for(const field in result) {
        if(document.querySelector("#"+field)) {
            document.querySelector("#"+field).value = result[field]
        }
    }
}

cep.addEventListener("blur", (event) => {
    let removeDash = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${removeDash}/json/`, options)
    .then(response => { response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log('Erro: ' + e, message));
});