import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"
import { New } from "../styled/new"
import { Features } from "../styled/featured"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646500/reto%201/manage_t4d4dy.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Manage</Title>
                                <New>NEW!</New>
                                <Features>FEATURED</Features>
                            </Notice>
                            <h4>Fullstack Developer</h4>
                            <div>
                                <P>1d ago • Part Time • Remote</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Fullstack</Categoria>
                            <Categoria>Midweight</Categoria>
                            <Categoria>Python</Categoria>
                            <Categoria>React</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
