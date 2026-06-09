import { MdOutlineEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { BsSendArrowUp } from "react-icons/bs";
import { useState } from "react";
import "../style/contato.css";

function Mensagens() {
    const [mensagem, setMensagem] = useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    function EnviarMensagem(event) {
        event.preventDefault();

        if (
            !mensagem.nome ||
            !mensagem.email ||
            !mensagem.mensagem
        ) {
            alert("É necessário preencher todos os campos.");
            return;
        }

        window.location.href =
            `mailto:agenorsrctt@gmail.com?subject=Contato de ${mensagem.nome}&body=${mensagem.mensagem}`;
    }

    return (
        <div className="mensagem">
            <form className="form-mensagem" onSubmit={EnviarMensagem}>
                <input type="text" placeholder="Nome" name="nome" value={mensagem.nome} onChange={(e)=> setMensagem({...mensagem, nome: e.target.value})}/>
                <input type="email" placeholder="E-mail" name="email" value={mensagem.email} onChange={(e)=> setMensagem({...mensagem, email: e.target.value})}/>
                <input type="textarea" placeholder="Mensagem" name="mensagem" value={mensagem.mensagem} onChange={(e)=> setMensagem({...mensagem, mensagem: e.target.value})}/>
                <button type="submit">Enviar Mensagem <span><BsSendArrowUp /></span></button>
            </form>
        </div>
    );
}

export function Contato() {
    return (
        <div className="contato">
            <hr />
            <h1 className="titulo-h1">CONTATO</h1>
            <h2 className="titulo-h2">Vamos Conversar?</h2>
            <div className="contato-conteudo">
                <div className="descritivo">
                    <p className="texto">
                        Estou sempre aberto a novas oportunidades e projetos incríveis. Vamos criar algo juntos
                    </p>
                </div>

                <div className="descritivo">
                    <p><span className="icone"><MdOutlineEmail /></span> agenorsrctt@gmail.com</p>
                    <p><span className="icone"><FaMapLocationDot /></span> Salvador, Bahia</p>
                    <p><span className="icone"><MdOutlinePermPhoneMsg /></span> (71) 99378- 3741</p>
                </div>

                <div className="descritivo">
                    <div className="form">
                        <Mensagens />
                    </div>
                </div>

            </div>
        </div>
    );
}