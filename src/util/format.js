class Format {

    static getCamelCase(text) {

        let div = document.createElement('div')

        div.innerHTML = `<div data-${text} = id></div>`

        return Object.keys(div.firstChild.dataset);

    }//Método utilizado para carregar todas os elementos HTML necessários e trocar o ID deles para CamelCase

}