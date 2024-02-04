import React, { useState } from "react";
import serverApi from "./api/server";
import ListaMundos from "@/components/ListaMundos";
import Container from "@/components/ui/Container";
import Head from "next/head";

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
        <ListaMundos resultados={results} />
      </Container>
    </>
  );
}
