import Link from "next/link";
import styled from "styled-components";
const StyledListaPersonagem = styled.section`

  img{
    max-width: 100%;
  }

  article {
    background-color: var(--cor-secundaria-fundo);
    margin: var(--valor-primario);
    padding: var(--valor-primario);
    border-radius: var(--borda-arredondada);
    color: var(--cor-primaria);
    box-shadow: var(--sombra-box);

    & img {
      width: 150px;
      border-radius: var(--borda-arredondada);
      border: gray solid 10px;
    }

    & p {
      word-break:  break-word;;

      & > img {
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    article {
      width: 45%;
      & > a{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: var(--valor-primario);
      }
    }
  }

`;

export default function Personagens({ results, info }) {

  
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
                <p>Nome: {character.name}</p>
                <p>Aparições: {character.episode.length}</p>
                <p>Especie: {character.species}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </StyledListaPersonagem>
  );
}
