import styled from "styled-components";

const StyledListaMundos = styled.section`
  article {
    background-color: var(--cor-secundaria-fundo);
    margin: var(--valor-primario);
    padding: var(--valor-primario) 1rem;
    border-radius: 1rem;
    box-shadow: var(--sombra-box);
    border: solid var(--cor-primaria) 1px;

    & h3 {
      font-size: 1.5rem;
      text-align: center;
      background-color: #bde2a0;
      border-radius: var(--borda-arredondada);
    }

    & hr {
      border: 0.1rem solid #ffffff;
      border-radius: 5px;
      margin: var(--valor-primario);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
    }
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    article {
      width: 45%;
      word-break: break-word;
    }
  }
`;

export default function ListaMundos({ resultados }) {
  return (
    <StyledListaMundos>
      {resultados.map(({ id, name, type, dimension }) => {
        return (
          <article key={id}>
            <h3>{name}</h3>
            <hr />
            <p>
              <b>Tipo:</b> {type}
            </p>
            <p>
              <b>Dimensão:</b> {dimension}
            </p>
          </article>
        );
      })}
    </StyledListaMundos>
  );
}
