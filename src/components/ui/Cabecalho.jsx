import Link from "next/link";
import styled from "styled-components"
import Menu from "./Menu";

const StyledHeader = styled.header`

div{

 display: flex;
justify-content: space-between;
align-items: center;

}


`;

export default function Cabecalho(){
    return <StyledHeader>

        <div className="limitador">
        <h1>
            <Link href="/">
            Rick Morty Api
            </Link>
        </h1>

        <Menu />
        
    </div>
    </StyledHeader>
}