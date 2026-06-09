import "../style/sobre.css"
import { DiCodeBadge } from "react-icons/di";
import { GoBook } from "react-icons/go";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

export function Sobre() {
    return (
        <div>
            <hr />
            <div className="nav-conteudo-sobre">
                <div className="nav-sobre">
                    <h2>SOBRE MIM</h2>
                    <h1>Quem sou eu?</h1>
                    <p>
                        Sou um desenvolver full-stack com foco em criar interfaces modernas, acessiveis e responsivas. Tenho experiências com HTML, CSS, JavaScript e frameworks como React.
                        <br /><br />
                        Gosto de transformar ideias em soluções digitais funcionais e bonitas. Estou sempre aprendendo e buscando evoluir como desenvolvedor.
                    </p>

                    <a href="#maisSobre">Saiba mais sobre mim</a>
                </div>


                <div className="nav-sobre-destaques">

                    <div>
                        <DiCodeBadge size={50} id="foco"/>
                        <div>
                            <h1>Foco em detalhes</h1>
                            <p>
                                Acredito que os pequenos detalhes fazer toda a diferença no resultado final
                            </p>
                        </div>
                    </div>

                    <div>
                        <GoBook size={50} id="aprendizado"/>
                        <div>
                            <h1>Sempre aprendendo</h1>
                            <p>
                                Tecnologia muda rápido e eu estou sempre estudando e evoluindo.
                            </p>
                        </div>
                    </div>

                    <div>
                        <HiOutlinePuzzlePiece size={50} id="problemas"/>
                        <div>
                            <h1>Resolução de problemas</h1>
                            <p>
                                Gosto de desafios e encontrar soluções criativas e eficientes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}