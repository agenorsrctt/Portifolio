import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../style/habilidades.css";


export function Habilidades() {


    return (
        <div className="habilidades">
            <hr />
            <h1 className="titulo-h1">HABILIDADES</h1>
            <h2 className="titulo-h2">Tecnologias que uso</h2>
            <div className="tecnologias-cards">

                <div className="tecnologias">
                    <span id="html"><FaHtml5 /></span>
                    <h3>HTML</h3>
                </div>

                <div className="tecnologias">
                    <span id="css"><FaCss3Alt /></span>
                    <h3>CSS</h3>
                </div>

                <div className="tecnologias">
                    <span id="javascript"><IoLogoJavascript /></span>
                    <h3>JavaScript</h3>
                </div>

                <div className="tecnologias">
                    <span id="react"><FaReact /></span>
                    <h3>React</h3>
                </div>

                <div className="tecnologias">
                    <span id="node"><FaNode /></span>
                    <h3>Node.JS</h3>
                </div>

                <div className="tecnologias">
                    <span id="java"><FaJava /></span>
                    <h3>JAVA</h3>
                </div>

                <div className="tecnologias">
                    <span id="python"><FaPython /></span>
                    <h3>Python</h3>
                </div>

                <div className="tecnologias">
                    <span id="mysql"><SiMysql /></span>
                    <h3>MySql</h3>
                </div>
            </div>
        </div>
    );
}