import Link from "next/link";
import styled from "styled-components";
import Menu from "./Menu";

const StyledHeader = styled.header`
  /* Mobile First */
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);
  padding: var(--valor-primario);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1.2rem;
    border-radius: var(--borda-arredondada);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    

    &:hover,
    &:focus {
      color: var(--cor-secundaria-hover);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0.5rem;
    
  }

  @media screen and (min-width: 700px) {
    h1 a {
      font-size: 2rem;
    }
    div {
      flex-direction: row;
    }
  }
`;

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">Rick Morty Api</Link>
        </h1>

        <Menu />
      </div>
    </StyledHeader>
  );
}
