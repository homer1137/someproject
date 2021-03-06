import Global from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darktheme, lighttheme } from "../styles/themes";
import { useState, useCallback } from "react";
import MainLayout from "../components/MainLayout";
import Head from "next/head";
import initFirebase from "../Firebase/ininFirebase";
import Context from "../src/Context";

initFirebase();

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [hotSpotArray, setHotSpotArray] = useState([]);

  const themeToggler = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  let value={
    hotSpotArray,
    setHotSpotArray,
  }

  return (
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Context.Provider value={value}>
        <Global />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;1,400;1,600&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <MainLayout themeToggler={themeToggler} theme={theme}>
          <Component {...pageProps} />
        </MainLayout>
      </Context.Provider>
    </ThemeProvider>
  );
}
