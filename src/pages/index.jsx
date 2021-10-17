import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import Stories from "../components/Stories";
import PostsHolder from "../components/PostsHolder";

export const Container = styled.div`
  grid-area: main;
  background-color: #f1f1f1;

  display: grid;
  grid-template-columns: 1fr 1.4fr;
  grid-template-rows: 80px 100vh;
  grid-template-areas:
    "left stories"
    "left posts";
  padding: 20px 0;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ gridArea: "left" }}></div>
      <Stories></Stories>
      <PostsHolder></PostsHolder>
    </Container>
  );
}
