import { LitElement, html } from "lit-element";

export class MyNavbar extends LitElement {


    render() {
        return html` 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
    
        <nav>
            <button class="navbar-toggler text-white" type="button" style="background-color: white;
            color: white;
            margin: 12px;" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon text-white" style="color: white;"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labellebdy="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 calss="offcanvas-title" id="offcanvasNavbarLabel"> Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item option menu">
                            <i class="fa-solid fa-chart-simple margin-icono size-icon">
                                ::before
                            </i>
                            <span class="text-list-font">Perfil<span>
                        </li>
                        <li class="nav-item option menu">
                            <i class="fa-solid fa-chart-simple margin-icono size-icon">
                            ::before
                            </i>
                            <span class="text-list-font">Contactenos</span>
                        </li>
                        <li class="nav-item option menu">
                            <i class="fa-solid fa-chart-simple margin-icono size-icon">
                            ::before
                            </i>
                            <span>Salir</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br>
        <br>
        <br>
        <br>
        `
    }
}

customElements.define("my-navbar", MyNavbar);