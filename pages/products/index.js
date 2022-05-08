import Router from "next/router";
import Head from "next/head";
import MainLayout from '../../components/MainLayout'
import styled from 'styled-components'

const H1 = styled.h1`
    color: coral;
`

function About() {
  function clickHandler() {
    Router.push("/products");
  }

  return (
    <>
        <Head>
            <title>Products page</title>
        </Head>
      <H1>This page is about this project</H1>
      <button onClick={() => Router.push("/")}>Go back to 2017</button>
      <button onClick={clickHandler}>this one button leads you to Posts</button>
    </>
  );
}

export default About;
