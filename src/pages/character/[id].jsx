import Container from "@/components/ui/Container";
import serverApi from "../api/server";
import styled from "styled-components";

const StyledInfo = styled.div``;

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/character/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();

    console.log(dados);

    return {
      props: {
        personagem: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Character({ personagem }) {
  return (
    <>
      <h2>Personagem</h2>
      <Container>
        <p>
          <img src={personagem.image} />
        </p>
        
        <StyledInfo>
        <h3>{personagem.name}</h3>

        <ul>
            <li>{personagem.status}</li>
            <li>{personagem.gender}</li>
            <li>{personagem.origin.name}</li>
            <li>{personagem.location.name}</li>
            <li>{personagem.type}</li>
            <li>{personagem.episode.length}</li>
        </ul>

</StyledInfo>


      </Container>
    </>
  );
}
