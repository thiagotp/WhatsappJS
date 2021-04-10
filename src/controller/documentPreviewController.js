export class DocumentPreviewController {

    constructor(file) {

        this._file = file

    }

    getPreviewData() {
        return new Promise((res, rej) => {
            switch (this._file.type) {

                case 'image/jpeg':
                case 'image/gif':
                case 'image/png':
                case 'image/jpg':
                    let reader = new FileReader()
                    reader.onload = (e => {
                        res({
                            src: reader.result,
                            info: this._file.name
                        })
                    })
                    reader.onerror = (err => {
                        rej(err)
                    })
                    reader.readAsDataURL(this._file)
                    break
                case 'application/pdf':
                    break
                default:
                    rej()

            }
        })
    }//Método para fazer a previsualização dos documentos enviados

}