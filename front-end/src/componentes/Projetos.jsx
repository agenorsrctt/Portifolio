import { useEffect, useState } from "react";
import "../style/projeto.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function ExibirProjeto({ id, nome, descricao, url, linguagens }) {

    let descricaoFinal = descricao;
    let titulo = nome;
    let imagem = nome;
    let link = nome;

    if (nome === "sistema-de-estoque") {
        descricaoFinal = "Projeto para gerenciamento simples de estoque diretamente no navegador.";
        titulo = "Controle de Estoque";
        imagem = "https://raw.githubusercontent.com/agenorsrctt/sistema-de-estoque/refs/heads/main/controle-de-estoque.png";
        link = "https://agenorsrctt.github.io/sistema-de-estoque/"
    }

    if (nome === "sistema-financeiro-pessoal") {
        descricaoFinal = "Dashboard para controle financeiro pessoal com gráficos e relatórios.";
        titulo = "Dashboard Financeiro";
        imagem = "https://raw.githubusercontent.com/agenorsrctt/sistema-financeiro-pessoal/refs/heads/main/img/sistema-de-controle-financeiro-pessoal.png";
        link = "https://agenorsrctt.github.io/sistema-financeiro-pessoal/"
    }

    return (
        <div className="exibir-projeto">
            <ul className="lista">
                <li key={id}></li>
                <img src={imagem} alt="Captura da tela" />
                <hr />
                <li> <h1>{titulo} <a href={link} target="_blank">{<FaExternalLinkAlt />}</a></h1> </li>
                <li>{descricaoFinal}</li>
                <div className="linguagens">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </div>
                <li><a href={url} target="_blank">Ver no GitHub</a></li>
            </ul>
        </div>
    );
}

export function Projetos() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/agenorsrctt/repos").then(resposta => resposta.json()).then(dados => setProjetos(dados)).catch(error => console.error("Erro: ", error));

    }, [])

    const projetosDestaque = projetos.filter(
        (item) =>
            item.name === "gerenciador-tarefas" ||
            item.name === "sistema-de-estoque" ||
            item.name === "sistema-financeiro-pessoal"
    );

    return (
        <div className="projetos-destaque">
            <hr />
            <h1 className="titulo-h1">PROJETOS</h1>
            <h2 className="titulo-h2">Projetos em destaque</h2>
            <div className="projetos">
                {projetosDestaque.map((item) => (
                    <ExibirProjeto
                        key={item.id}
                        nome={item.name}
                        descricao={item.description}
                        url={item.html_url}
                    />
                ))}
            </div>
        </div>
    );

}