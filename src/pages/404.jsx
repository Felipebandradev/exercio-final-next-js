import Image from "next/image";
import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";


const StyledErro = styled.div`
  img {
    max-width: 100%;
  }

 text-align: center;
`;

export default function Pagina404() {
  return (
    <StyledErro>
      <Head>
        <title>Ops - Rick Morty Api </title>
      </Head>
      <h2>Algo deu Errado</h2>

     
      <Container>
       
        <p>
          A arma de portais falhou foi culpa do morty vamos tentar novamente mais tarde
        </p>

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <Image
            src="/images/404.webp"
            width={450}
            height={450}
            alt="Rick and Morty"
          />
        </p>

      
      </Container>
    </StyledErro>
  );
}
