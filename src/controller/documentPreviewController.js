const pdfjsLib = require('pdfjs-dist')
const path = require('path')

pdfjsLib.GlobalWorkerOptions.workerSrc = path.resolve(__dirname, '../../dist/pdf.worker.bundle.js')

export class DocumentPreviewController {

    constructor(file) {

        this._file = file

    }

    getPreviewData() {
        return new Promise((res, rej) => {
            let reader = new FileReader()
            switch (this._file.type) {

                case 'image/jpeg':
                case 'image/gif':
                case 'image/png':
                case 'image/jpg':
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

                    reader.onload = e => {
                        pdfjsLib.getDocument(new Uint8Array(reader.result)).then(pdf => {
                            pdf.getPage(1).then(page => {
                                let viewport = page.getViewport(1)
                                let canvas = document.createElement('canvas')
                                let canvasContext = canvas.getContext('2d')

                                canvas.width = viewport.width
                                canvas.height = viewport.height

                                page.render({
                                    canvasContext,
                                    viewport
                                }).then(() => {
                                    let s = (pdf.numPages > 1 ) ? 's' : ''
                                    res({
                                        src: canvas.toDataURL('image/png'),
                                        info: `${pdf.numPages} página${s}`
                                    })
                                }).catch(err => {
                                    rej(err)
                                })
                            }).catch(err => {
                                rej(err)
                            })
                        }).catch(err => {
                            rej(err)
                        })
                    }
                    reader.readAsArrayBuffer(this._file)
                    break
                default:
                    rej()

            }
        })
    }//Método para fazer a previsualização dos documentos enviados

}