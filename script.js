function buscarPalabras() {
    let resultado = '%20%28';
    for (let i = 0; i < arguments.length; i++) {
        if (resultado !== '%20%28') {
            resultado += '%20OR%20';
        }
        resultado += arguments[i];
    }

    console.log(resultado);
    return resultado.concat('%29');
}

function buscarTweets() {
    const twitterUsername = document.getElementById('twitterUsername').value
    const opcion = document.getElementById('filtros')
    const optionError = document.getElementById('optionError');
    const twitterSearch = "https://twitter.com/search?q=from%3A";
    let searchQuery = twitterSearch + `${twitterUsername}`;

    if (twitterUsername.length > 0) {
        if (opcion.value == "machistas") {
            searchQuery += buscarPalabras('mujer', 'mujeres', 'putas');
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "homofob") {
            searchQuery += buscarPalabras('gay', 'gays', 'putos', 'trolos');
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "racistas") {
            searchQuery += buscarPalabras('negro', 'negros', 'marron', 'marrones', 'nword');
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "messi") {
            const messiQuery = searchQuery + `%20messi%20until%3A2021-01-01`
            window.open(messiQuery, '_blank')
        } else if (opcion.value == "electoral") {
            searchQuery += buscarPalabras('milei', 'massa', 'larreta', 'bullrich');
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "seleccione") {
            optionError.innerHTML = 'Ingrese una opción válida!!!';
            optionError.style.display = "block";

            // reiniciamos el texto luego de 2 segundos
            setTimeout(() => {
                optionError.innerHTML = '';
                divCopiar.style.display = "none";
            }, 2000);
        }
    } else {
        optionError.innerHTML = 'Ingrese un usuario valido!!!';
        optionError.style.display = "block";
        // reiniciamos el texto
        setTimeout(() => {
            optionError.innerHTML = '';
            divCopiar.style.display = "none";
        }, 3000);
    }

}


