import Link from "next/link";
import styled from "styled-components";
const StyledListaPersonagem = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  article {
    background-color: var(--cor-secundaria-fundo);
    margin: var(--valor-primario);
    padding: var(--valor-primario);
    border-radius: var(--borda-arredondada);
    color: var(--cor-primaria);

    & img {
      border-radius: var(--borda-arredondada);
    }

    & p {
      word-wrap: break-word;
      padding: var(--valor-primario);

      & > img {
        text-align: center;
      }
    }
  }
`;

export default function Personagens({ results }) {
  return (
    <StyledListaPersonagem>
      {results.map((character) => {
        return (
          <article key={character.id}>
            <Link href="/">
              <p>
                <img src={character.image} alt={character.name} />
              </p>
              <div>
                <p>Nome: {character.name}</p>
                <p>Aparições: {character.episode.length}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </StyledListaPersonagem>
  );
}
