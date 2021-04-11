import { ClassEvent } from "../util/classEvent"

export class MicrophoneController extends ClassEvent {

    constructor() {

        super();

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            this._stream = stream
            let audio = new Audio()
            audio.srcObject = stream
            audio.play()
            this.trigger('play', audio)
        }).catch(err => {
            console.error(err)
        })
    }//Acionando o microfone com a API navigator.mediaDevices.getUserMedia

    stop() {
        this._stream.getTracks().forEach(track => {
            track.stop()
        })
    }//Parando o microfone 

}