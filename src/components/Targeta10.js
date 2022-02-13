import React, { Component } from 'react'
import { Marco, Marcointerno, Imagen, Etiquetas, Notice, Datos, Categoria, Title, P } from "../styled/targetas"

export default class Targeta1 extends Component {
    render() {
        return (
            <div>
                <Marco>
                    <Marcointerno>
                        <Imagen>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646499/reto%201/the-air-filter-company_tndds9.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>The Air Filter Company</Title>
                            </Notice>
                            <h4>Front-end Dev</h4>
                            <div>
                                <P>1mo ago • Part Time • Worldwide</P>
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
