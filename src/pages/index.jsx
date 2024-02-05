import Image from "next/image";
import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";
import { GiPlanetConquest } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import Link from "next/link";

const StyledHome = styled.div`
  img {
    max-width: 100%;
  }

  a {
    padding: var(--valor-primario) 1rem;
    margin: var(--valor-primario);
  }

  iframe {
    max-width: 100%;
    width: 800px;
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <Head>
        <title>Rick Morty Api </title>
      </Head>
      <h2>Boas Vindas: Rick Morty Api</h2>

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
        <h3>Conheça esse site feito com Rick Morty Api</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          perspiciatis recusandae error hic esse illum enim aspernatur cumque,
          incidunt doloremque laboriosam placeat fuga unde quia? Reprehenderit
          hic molestias temporibus alias illum ipsum, aliquid nihil quam
          voluptas cum, omnis quos cupiditate sit minus exercitationem
          laboriosam veritatis tempore recusandae? Molestiae, aspernatur
          consequatur.
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
            src="/images/rick-morty-home.png"
            width={450}
            height={450}
            alt="Rick and Morty"
          />
        </p>

        <h3>Explore: </h3>

        <Link href="/personagens">
          <div>
            <IoPersonSharp />
            <p>Personagens</p>
          </div>
        </Link>
        <hr />
        <Link href="/mundos">
          <div>
            <p>
              <GiPlanetConquest />
              Mundos
            </p>
          </div>
        </Link>
        <hr />
        <Link href="/episodios">
          <div>
            <p>
              <MdOndemandVideo />
              Episódios
            </p>
          </div>
        </Link>

        <h3>Conhecendo a Animação: </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a
          voluptas reprehenderit molestiae aut ratione necessitatibus quidem
          voluptatum consectetur vero doloremque, aliquam, totam deserunt
          cupiditate itaque voluptatibus omnis soluta tenetur! Animi et libero,
          ipsa eaque temporibus dolores commodi nesciunt dolorem iusto,
          consectetur ullam ratione eos delectus esse optio doloremque alias!
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <iframe
            height="315"
            src="https://www.youtube.com/embed/Dsh6bJI20OE?si=wURJ3nDdrNbXSEtK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
      </Container>
    </StyledHome>
  );
}
