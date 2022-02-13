import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646497/reto%201/faceit_hn0yw1.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>FaceIt</Title>
                            </Notice>
                            <h4>Junior Backend Developer</h4>
                            <div>
                                <P>2w ago • Full Time • UK only</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Backend</Categoria>
                            <Categoria>Junior</Categoria>
                            <Categoria>Ruby</Categoria>
                            <Categoria>RoR</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
