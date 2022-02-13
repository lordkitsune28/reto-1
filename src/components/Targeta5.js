import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646500/reto%201/loop-studios_f2kywd.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Loop Studios</Title>
                            </Notice>
                            <h4>Software Engineer</h4>
                            <div>
                                <P>1w ago • Full Time • Worldwide</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Fullstack</Categoria>
                            <Categoria>Midweight</Categoria>
                            <Categoria>JavaScript</Categoria>
                            <Categoria>Sass</Categoria>
                            <Categoria>Ruby</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
