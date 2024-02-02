import React, { useState } from "react";
import serverApi from "./api/server";
import Personagens from "@/components/Personagens";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Head from "next/head";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/character/?page=1`);
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

export default function Home({ dados }) {
  const { results, info } = dados;
  console.log(info);

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
        <Personagens results={results} info={info} />
      </Container>
    </>
  );
}
