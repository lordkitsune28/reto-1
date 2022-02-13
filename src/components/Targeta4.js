import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646500/reto%201/myhome_g4nr5u.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>MyHome</Title>
                            </Notice>
                            <h4>Junior Frontend Developer</h4>
                            <div>
                                <P>5d ago • Contract • USA only</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Frontend</Categoria>
                            <Categoria>Junior</Categoria>
                            <Categoria>CSS</Categoria>
                            <Categoria>JavaScript</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
