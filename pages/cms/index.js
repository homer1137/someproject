import Router from "next/router";
import Head from "next/head";
import styled from 'styled-components'
import AddProductForma from "../../components/AddProductForma";
import AddHotSpot from "../../components/AddHotSpot";


function About2() {
  function clickHandler() {
    Router.push("/posts");
  }


 

  return (
    <>
        <Head>
            <title>CMS page</title>
        </Head>
      <h1>CMS</h1>
      
      <AddProductForma/>
      <AddHotSpot/>
      
    </>
  );
}

export default About2;