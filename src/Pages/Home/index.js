import React from 'react'
import './styles.css'
import DefaultComponent from '../../Components/DefaultComponent'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import GitHubIcon from '@material-ui/icons/GitHub';

export default function Home() {
    return(
        <DefaultComponent title="Bem vindo">
            <>
            <section id="primary">
                <h1 id="name">Wanderson Pinho</h1>
                <h2>FullStack Developer</h2>
            </section>
            <section id="secondary">
                <div onClick={() => window.location.href= "https://api.whatsapp.com/send?phone=5567996576515"}>
                        <WhatsAppIcon className="icons"/>
                </div>
                <div onClick={() => window.location.href= "https://www.linkedin.com/in/wanderson-pinho-ab87a5185/"}>
                    <LinkedInIcon className="icons"/>
                </div>
                <div onClick={() => window.location.href= "mailto:luanpinhoo@gmail.com"}>
                    <MailIcon className="icons"/>
                </div>
                <div onClick={() => window.location.href= "https://www.linkedin.com/in/wanderson-pinho-ab87a5185/"}>
                    <GitHubIcon className="icons"/>
                </div>
            </section>
            </>
        </DefaultComponent>
    )
}