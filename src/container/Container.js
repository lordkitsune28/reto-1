import React, { Component } from 'react';
import { StyledBanner } from "../styled/stylebanner"
import { StyledCuerpo } from "../styled/cuerpo"
import styled from "styled-components";
import Targeta1 from "../components/Targeta1"
import Targeta2 from "../components/Targeta2"
import Targeta3 from "../components/Targeta3"
import Targeta4 from "../components/Targeta4"
import Targeta5 from "../components/Targeta5"
import Targeta6 from "../components/Targeta6"
import Targeta7 from "../components/Targeta7"
import Targeta8 from "../components/Targeta8"
import Targeta9 from "../components/Targeta9"
import Targeta10 from "../components/Targeta10"

const StyledContainer = styled.div`
margin-top: 170px;
`

export default class Container extends Component {
    render() {
        return <StyledCuerpo>
            <StyledBanner/>
            <StyledContainer>
            <Targeta1/>
            <Targeta2/>
            <Targeta3/>
            <Targeta4/>
            <Targeta5/>
            <Targeta6/>
            <Targeta7/>
            <Targeta8/>
            <Targeta9/>
            <Targeta10/>
            </StyledContainer>          
        </StyledCuerpo>;
    }
}