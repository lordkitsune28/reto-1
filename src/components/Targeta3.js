import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"
import { New } from "../styled/new"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646497/reto%201/account_l5y6oh.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Account</Title>
                                <New>NEW!</New>
                            </Notice>
                            <h4>Junior Frontend Developer</h4>
                            <div>
                                <P>2d ago • Part Time • USA only</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Frontend</Categoria>
                            <Categoria>Junior</Categoria>
                            <Categoria>React</Categoria>
                            <Categoria>Sass</Categoria>
                            <Categoria>JavaScript</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
