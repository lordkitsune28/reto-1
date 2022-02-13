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
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1644646501/reto%201/photosnap_ftfsjt.svg"></img>
                        </Imagen>
                        <Datos>
                            <Notice>
                                <Title>Photosnap</Title>
                                <New>NEW!</New>
                                <Features>FEATURED</Features>
                            </Notice>
                            <h4>Senior Frontend Developer</h4>
                            <div>
                                <P>1d ago • Full Time • USA only</P>
                            </div>
                        </Datos>
                        <Etiquetas>
                            <Categoria>Frontend</Categoria>
                            <Categoria>Senior</Categoria>
                            <Categoria>HTML</Categoria>
                            <Categoria>CSS</Categoria>
                            <Categoria>JavaScript</Categoria>
                        </Etiquetas>
                    </Marcointerno>
                </Marco>
            </div>
        )
    }
}
