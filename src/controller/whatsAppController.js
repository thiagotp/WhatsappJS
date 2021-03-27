class WhatsAppController{

    constructor(){
        this.loadElements()
    }

    loadElements(){
        
        this.el = {}
        document.querySelectorAll('[id]').forEach(element =>{

            this.el[Format.getCamelCase(element.id)] = element;

        })

    }//Método usado para carregar todos os itens HTML que serão utilizados que tenham "id"

}