import { LitElement } from "lit-element";
import stylescss from './my-chartStyle';

export class Mychart extends LitElement {
    static get styles(){
        return [stylescss]
    }

    render(){
        return html`
        <div class="card card-padding box-sombra">
                <div class="container-fluid text-center">
                    <div class="message">
                        <h5>Bienvenid@ al sistema integrado de PUMAS</h5>
                        <h1>PUMAS TIC</h1>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("<my-chart>", Mychart)