import React, { useState } from "react";
import serverApi from "./api/server";
import Personagens from "@/components/Personagens";
import Image from "next/image";
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
    const resposta = await fetch(`${serverApi}/character/?page=1`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

export default function Home({ dados }) {
  const { results, info } = dados;

  const [PaginaApi, setPaginaApi] = useState(results); // state criado pra coletar o array results
  const [InfoApi, setInfoApi] = useState(info); // state criado pra coletar o array info

  // Função para buscar os dados de uma página específica
  const fetchPersonagem = async (url) => {
    try {
      const resposta = await fetch(url); // Faz uma requisição à API usando a URL fornecida
      const dados = await resposta.json(); // Converte a resposta da API para JSON

      if (!resposta.ok) {
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`); // Lança um erro se a resposta da API não estiver ok
      }

      // Atualiza os dados com os novos dados buscados
      setPaginaApi(dados.results);
      setInfoApi(dados.info);
    } catch (error) {
      console.error("Deu ruim: " + error.message); // Log de erro caso ocorra algum problema
    }
  };

  // Função para lidar com o clique no botão de próxima página
  const ProximaPagina = async () => {
    if (InfoApi.next) {
      // Verifica se há uma próxima página disponível
      const url = InfoApi.next; // Obtém a URL da próxima página
      await fetchPersonagem(url); // Busca os dados da próxima página
    }
  };

  // Função para lidar com o clique no botão de página anterior
  const PaginaAnterior = async () => {
    if (InfoApi.prev) {
      // Verifica se há uma página anterior disponível
      const url = InfoApi.prev; // Obtém a URL da página anterior
      await fetchPersonagem(url); // Busca os dados da página anterior
    }
  };

  return (
    <>
      <Head>
        <title>Rick Morty Api </title>
      </Head>
      <h2>Boas Vindas: à personagens</h2>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <Image
          src="/images/Rick_and_Morty.png"
          width={650}
          height={550}
          alt="Rick and Morty"
        />
      </p>
      <Container>
        <h3>Conheça os Personagens da série</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          perspiciatis recusandae error hic esse illum enim aspernatur cumque,
          incidunt doloremque laboriosam placeat fuga unde quia? Reprehenderit
          hic molestias temporibus alias illum ipsum, aliquid nihil quam
          voluptas cum, omnis quos cupiditate sit minus exercitationem
          laboriosam veritatis tempore recusandae? Molestiae, aspernatur
          consequatur.
        </p>

        <Personagens results={PaginaApi} info={InfoApi} />

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
