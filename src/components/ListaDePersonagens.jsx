import Link from "next/link";
import { TbHandClick } from "react-icons/tb";
import styled from "styled-components";
const StyledListaPersonagem = styled.section`
  img {
    max-width: 100%;
  }

  article {
    background-color: var(--cor-secundaria-fundo);
    margin: var(--valor-primario);
    padding: var(--valor-primario);
    border-radius: var(--borda-arredondada);
    color: var(--cor-primaria);
    box-shadow: var(--sombra-box);
    border: solid var(--cor-primaria) 1px;

    & h3 {
      text-align: center;
      background-color: #bde2a0;
      border-radius: var(--borda-arredondada);
      padding: var(--valor-primario);
    }

    & img {
      width: 150px;
      border-radius: var(--borda-arredondada);
      border: gray solid 10px;
    }

    & p {
      word-break: break-word;

      & > img {
        text-align: center;
      }
    }
    & a {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
    }
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    article {
      width: 45%;
      & > a {
        gap: var(--valor-primario);
      }
    }
  }
`;

export default function ListaDePersonagens({ results, info }) {
  return (
    <StyledListaPersonagem>
      {results.map((character) => {
        return (
          <article key={character.id}>
            <Link href={`/character/${character.id}`}>
              <p>
                <img src={character.image} alt={character.name} />
              </p>
              <div>
                <h3>{character.name}</h3>
                <hr />
                <p>Aparições: {character.episode.length}</p>
                <p>Especie: {character.species}</p>
              </div>
            </Link>
            <Link href={`/character/${character.id}`}>
              Ler Mais <TbHandClick />
            </Link>
          </article>
        );
      })}
    </StyledListaPersonagem>
  );
}
