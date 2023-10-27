import { LitElement } from "lit-element";
import stylescss from './my-list-inicioStyle'

export class MyListInicio extends LitElement {
    static get styles(){
        return [stylescss]
    }
    render() {
        return html`
        <div class="card box-sombra card-menu">
                <ul style="padding-left: 1px">
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Inicio</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Presidencia</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Vice Presidencia</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Secretaria</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Tesoreria</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Revisoria Fiscal</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista afiliados</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista de Jugadores</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista de Coach's</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista Material</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista asistencia</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Lista Cronograma</span>
                        </a>
                    </li>
                    <li clasS="option-menu">
                        <a class="link-buttom">
                            <img src="./assets/img/iconoBalon.png" alt class="img-list-link">
                            <span class="text-list-font">Varios</span>
                        </a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("my-list-inicio", MyListInicio)