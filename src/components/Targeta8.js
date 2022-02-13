import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646499/reto%201/insure_kq07t3.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Insure</Title>
                            </Notice>
                            <h4>Junior Frontend Developer</h4>
                            <div>
                                <P>2w ago • Full Time • USA only</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Frontend</Categoria>
                            <Categoria>Junior</Categoria>
                            <Categoria>Vue</Categoria>
                            <Categoria>JavaScript</Categoria>
                            <Categoria>Sass</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
