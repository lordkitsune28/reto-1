import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646497/reto%201/eyecam-co_v8cfpi.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Eyecam Co.</Title>
                            </Notice>
                            <h4>Full Stack Engineer</h4>
                            <div>
                                <P>3w ago • Full Time • Worldwide</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Fullstack</Categoria>
                            <Categoria>Midweight</Categoria>
                            <Categoria>JavaScript</Categoria>
                            <Categoria>Django</Categoria>
                            <Categoria>Python</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
