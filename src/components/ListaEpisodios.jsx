export default function ListaEpisodios({ resultados }) {
  return (
    <>
      {resultados.map(({ id, name, episode, air_date }) => {
        return (
          <article key={id}>
            <h3>{name}</h3>
            <p>{episode}</p>
            <p>{air_date}</p>
          </article>
        );
      })}
    </>
  );
}
