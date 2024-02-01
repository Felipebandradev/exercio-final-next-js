
import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
import serverApi from "./api/server";
import styled from "styled-components";
import Personagens from "@/components/Personagens";


export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/character`);
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


export default function Home({dados}) {
  
  const { results } = dados;
  
  return (
    <>
      <h2>Boas Vindas: </h2>

      <Personagens results={results} />

      <Pagination isCompact showControls total={10} initialPage={1} />
    </>
  );
}




