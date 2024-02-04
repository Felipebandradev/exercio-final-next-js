import styled from "styled-components";

const StyledEpisodes = styled.section`




article{
    background-color: var(--cor-secundaria-fundo);
    margin: var(--valor-primario);
    padding: var(--valor-primario) 1rem;
    border-radius: var(--borda-arredondada) ;
    box-shadow: var(--sombra-box);
    border: solid var(--cor-primaria) 1px;

    & h3{
        font-size: 1.3rem;
        text-align: center;
        color: var(--cor-primaria);
        background-color: #c5f92f;
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

export default function ListaEpisodios({ resultados }) {
  return (
    <StyledEpisodes>
      {resultados.map(({ id, name, episode, air_date }) => {
        return (
          <article key={id}>
            <h3>{name}</h3>
            <hr />
            <p><b>Episodio:</b> {episode}</p>
            <p><b>Lançamento</b>: {air_date}</p>
          </article>
        );
      })}
    </StyledEpisodes>
  );
}
