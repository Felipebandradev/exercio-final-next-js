import React, { useState } from "react";
import serverApi from "./api/server";
import ListaMundos from "@/components/ListaMundos";
import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

const StyledPaginacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.5rem 1rem;
    border-radius: var(--borda-arredondada);
    &:hover {
      background-color: var(--cor-primaria-fundo-hover);
    }
  }
`;

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/location`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

export default function Mundos({ dados }) {
  const { results, info } = dados;
  const [PaginaApi, setPaginaApi] = useState(results);
  const [InfoApi, setInfoApi] = useState(info);

  const fetchPersonagem = async (url) => {
    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
      }

      setPaginaApi(dados.results);
      setInfoApi(dados.info);
    } catch (error) {
      console.error("Deu ruim: " + error.message);
    }
  };

  const ProximaPagina = async () => {
    if (InfoApi.next) {
      const url = InfoApi.next;
      await fetchPersonagem(url);
    }
  };

  const PaginaAnterior = async () => {
    if (InfoApi.prev) {
      const url = InfoApi.prev;
      await fetchPersonagem(url);
    }
  };

  return (
    <>
      <Head>
        <title>Mundos - Ricky Morty Api</title>
      </Head>
      <h2>Boas Vindas: à Mundos </h2>

      <Container>
        <h3>Conheça alguns mundos da Série</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          deleniti maiores quam earum cum vel voluptatibus dolore? Eos,
          repudiandae? Eaque a cumque excepturi repudiandae nisi assumenda eum
          accusamus maxime vel odit, reiciendis quibusdam molestiae nam
          laboriosam suscipit tenetur non sint soluta. Impedit nulla ea
          reprehenderit laborum perferendis nobis aliquid dolore.
        </p>
        <ListaMundos resultados={PaginaApi} />

        <StyledPaginacao>
          <button disabled={!InfoApi.prev} onClick={PaginaAnterior}>
            Página Anterior
          </button>
          <button disabled={!InfoApi.next} onClick={ProximaPagina}>
            Próxima Página
          </button>
        </StyledPaginacao>
      </Container>
    </>
  );
}
