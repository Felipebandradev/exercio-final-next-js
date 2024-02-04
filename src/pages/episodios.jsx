import React, { useState } from "react";
import serverApi from "./api/server";
import Head from "next/head";
import ListaEpisodios from "@/components/ListaEpisodios";
import Container from "@/components/ui/Container";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/episode`);
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

  return (
    <>
      <Head>
        <title> Episódios - Ricky Morty Api</title>
      </Head>
      <h2>Boas Vindas: à Episódios </h2>

      <Container>
      <h3>Conheça Alguns Episódios da Série </h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non, nisi perspiciatis, quas alias doloremque accusantium, illo qui ipsam cumque dolore! Aliquam molestias maiores corporis voluptatibus similique, libero commodi, minus veniam ad aperiam dignissimos quisquam rerum laboriosam tempora laborum impedit, nesciunt hic fuga dolorum id sunt incidunt inventore facere! Quod!</p>

      <ListaEpisodios resultados={results} />
      </Container>

    
    </>
  );
}
