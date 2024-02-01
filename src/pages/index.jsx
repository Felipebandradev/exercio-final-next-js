
import React, { useState } from "react";
import serverApi from "./api/server";
import styled from "styled-components";
import Personagens from "@/components/Personagens";


export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/character/?page=20`);
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
  
  const { results, info } = dados;
  console.log(info);


 
  return (
    <>
      <h2>Boas Vindas: </h2>

      <Personagens results={results} info={info} />

 
    </>
  );
}




