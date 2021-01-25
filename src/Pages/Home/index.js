import React from 'react'
import './styles.css'
import DefaultComponent from '../../Components/DefaultComponent'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { CssIcon, TsIcon, DockerIcon, JsIcon, MysqlIcon, NodeIcon, PsqlIcon, ReactIcon, ReduxtIcon } from '../../Components/Icons/icons';
 
export default function Home() {
    return(
        <DefaultComponent title="Bem vindo">
            <>
            <section id="primary">
                <h1 id="name">Wanderson Pinho</h1>
                <h2 id="dev">FullStack Developer</h2>
            </section>
            <section id="three">
                <h2 id="skills">Experiências</h2>
                    <JsIcon/>
                    <ReactIcon />
                    <NodeIcon />
                    <ReduxtIcon />
                    <CssIcon />
                    <TsIcon />
                    <DockerIcon/>
                    <MysqlIcon />
                    <PsqlIcon />
            </section>
            <section id="secondary">
                    <div id="biography">
                        <h3>Sou um desenvolvedor motivado, com mais de 2 anos de experiência. Focado em
                            resolução de problemas, possuo aptidão para comunicação, interação
                            com equipes. Procuro estar sempre em busca de novidades na área para
                            aplicar, divulgar e compartilhar conhecimento.
                        </h3>
                        <br/>
                        <h3>
                            Mais familizarizado com JavaScript(es6+) e seu ecossistema React e
                            NodeJs. Atuando como fullstack, porém sempre tive mais afinidade com
                            o desenvolvimento Frontend.
                        </h3>
                    </div>
                    <div id="divIcons">
                        <div id="borderButton" onClick={() => window.location.href= "https://api.whatsapp.com/send?phone=5567996576515"}>
                                <WhatsAppIcon className="icons"/>
                        </div>
                        <div  id="borderButton" onClick={() => window.location.href= "https://www.linkedin.com/in/wanderson-pinho-ab87a5185/"}>
                            <LinkedInIcon className="icons"/>
                        </div>
                        <div  id="borderButton" onClick={() => window.location.href= "mailto:luanpinhoo@gmail.com"}>
                            <MailIcon className="icons"/>
                        </div>
                        <div id="borderButton" onClick={() => window.location.href= "https://github.com/luan2017/"}>
                            <GitHubIcon className="icons"/>
                        </div>
                    </div>
            </section>
            </>
        </DefaultComponent>
    )
}