import React, { useState } from "react";
import serverApi from "./api/server";
import styled from "styled-components";
import Head from "next/head";
import ListaEpisodios from "@/components/ListaEpisodios";

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
  console.log(info);

  return (
    <>
      <Head>
        <title> Episodios - Ricky Morty Api</title>
      </Head>
      <h2>Boas Vindas: à Episodios </h2>

      <ListaEpisodios resultados={results} />

    
    </>
  );
}
