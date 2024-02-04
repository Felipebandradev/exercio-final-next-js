import Link from "next/link";
import styled from "styled-components";

const StyledMenu = styled.nav`
  /* Mobile First */
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }
    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <Link href="/">Início</Link>
      <Link href="/personagens">Personagens</Link>
      <Link href="/mundos">Mundos</Link>
      <Link href="/episodios">Episodios</Link>
    </StyledMenu>
  );
}
