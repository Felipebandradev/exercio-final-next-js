import Container from "@/components/ui/Container";
import serverApi from "../api/server";
import styled from "styled-components";
import { IoReaderOutline } from "react-icons/io5";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { GiPlanetConquest, GiFamilyTree } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { FaTransgender } from "react-icons/fa6";
import Head from "next/head";
import Link from "next/link";

const StyledInfo = styled.section`
  img {
    max-width: 100%;
    clip-path: circle(50% at 50% 50%);
    box-shadow: var(--sombra-box);
  }

  h3 {
    font-size: 2rem;
    text-align: center;
    margin: var(--valor-primario);
    padding: var(--valor-primario) 1rem;
    background-color: var(--cor-secundaria-fundo);
    border-radius: var(--borda-arredondada);
  }

  div {
    padding: var(--valor-primario) 1rem;
    margin: var(--valor-primario);
  }

  hr {
    border: 0.1rem solid #333333;
    border-radius: 5px;
    margin: var(--valor-primario);
    width: 100%;
  }

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.5rem 1rem;
    border-radius: var(--borda-arredondada);
    &:hover {
      background-color: var(--cor-primaria-fundo-hover);
    }
  }
  @media screen and (min-width: 500px) {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & div {
        width: 50%;
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/character/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();


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
  const titulo = `${personagem.name} - Rick Morty Api `;

  return (
    <>
      <Head>
        <title>{titulo}</title>
      </Head>
      <h2>Personagem</h2>
      <StyledInfo>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <img src={personagem.image} alt={personagem.name} />
        </p>

        <Container>
          <h3>
            <IoReaderOutline /> {personagem.name}
          </h3>

          <div className="container">
            <div>
              <div>
                <p>
                  <GiFamilyTree />
                  <b>Espécie: </b>
                </p>
                <p>{personagem.species}</p>
                <hr />
              </div>
              <div>
                <p>
                  <FaHeart />
                  <b>Status: </b>
                </p>
                <p>{personagem.status}</p>
                <hr />
              </div>
              <div>
                <p>
                  <FaTransgender />
                  <b>Genêro: </b>
                </p>
                <p>{personagem.gender}</p>
                <hr />
              </div>
            </div>
            <div>
              <div>
                <p>
                  <GiPlanetConquest />
                  <b>Origem: </b>
                </p>
                <p>{personagem.origin.name}</p>
                <hr />
              </div>
              <div>
                <p>
                  <FaMapMarkerAlt />
                  <b>Localização: </b>
                </p>
                <p>{personagem.location.name}</p>
                <hr />
              </div>
              <div>
                <p>
                  <MdOndemandVideo />
                  <b>Aprições: </b>
                </p>
                <p>{personagem.episode.length}</p>
                <hr />
              </div>
            </div>
          </div>
          <Link href="/">
            Voltar
          </Link>
        </Container>
      </StyledInfo>
    </>
  );
}
