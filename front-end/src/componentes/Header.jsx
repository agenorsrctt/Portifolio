import "../style/header.css";

export function Header(){

    

    return(
        <div className="header">

            <div className="meu-nome">
                <h1>Seja <span>Bem-Vindo</span></h1>
            </div>

            <div className="nav">
                <a href="#inicio">Inicio</a>
                <a href="#Sobre">Sobre</a>
                <a href="#Projetos">Projetos</a>
                <a href="#Habilidades">Habilidades</a>
                <a href="#Contato">Contato</a>
            </div>


            <div className="nav-btn">
                <button className="btn-cv" type="button">Baixar CV</button>
            </div>
        </div>
    );
}