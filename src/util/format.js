class Format {

    static getCamelCase(text) {

        let div = document.createElement('div')

        div.innerHTML = `<div data-${text} = id></div>`

        return Object.keys(div.firstChild.dataset);

    }//Método utilizado para carregar todas os elementos HTML necessários e trocar o ID deles para CamelCase

    static toTime(duration) {

        let seconds = parseInt((duration / 1000) % 60)
        let minutes = parseInt((duration / (1000 * 60)) % 60)
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24)

        if(hours > 0) {
            return  `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }else{
            return  `${minutes}:${seconds.toString().padStart(2, '0')}`
        }
        
    }//Método para formatar o timer do microfone de milisegundos para o padrão normal

}