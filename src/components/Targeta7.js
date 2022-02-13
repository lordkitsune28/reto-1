import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646498/reto%201/shortly_q6awio.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Shortly</Title>
                            </Notice>
                            <h4>Junior Developer</h4>
                            <div>
                                <P>2w ago • Full Time • Worldwide</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Frontend</Categoria>
                            <Categoria>Junior</Categoria>
                            <Categoria>HTML</Categoria>
                            <Categoria>JavaScript</Categoria>
                            <Categoria>Sass</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
