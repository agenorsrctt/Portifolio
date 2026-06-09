import "../style/inicio.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import minhaFoto2 from "../assets/minhaFoto2.png";

export function Inicio() {


    return (
        <div>

            <div className="inicio-conteudo">
                <div className="nav-conteudo">
                    <div className="descritivo">
                        <h2><span>OLÁ, EU SOU</span></h2>
                        <h1>Agenor <span>S. Rodrigues</span></h1>
                        <h3>Desenvolvedor Web</h3>
                        <p>Sou desenvolvedor web, apaixonado por criar experiências digitais modernas, responsivas e com foco em perfomance e usabilidade.</p>
                    </div>

                    <div className="nav-projetos-contato">
                        <a href="#projetos">Ver Projetos</a>
                        <a href="#contato">Entrar em contato</a>
                    </div>

                    <div className="nav-redes-sociais">
                        <a href="https://github.com/agenorsrctt" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/agenorsrctt/" target="_blank"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/agenorsrctt/" target="_blank"><FaInstagram /></a>
                        <a href="mailto:agenorsrctt@gmail.com" target="_blank"><MdEmail /></a>
                    </div>
                </div>


                <div className="minha-imagem">
                    <img src={minhaFoto2} alt="Minha Foto"/>
                </div>
            </div>

        </div>
    );
}