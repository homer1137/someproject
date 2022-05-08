import Link from "next/link";
import { Navigation } from "../styles/Navigation";
import {
  GlobalContainerHeader,
  GlobalContainer,
} from "../styles/globalContainer";

import Burger from "./Burger";

export default function Layout({ children, ...props }) {
  return (
    <>
      <Navigation>
        <GlobalContainerHeader>
          <Link href={"/"}>
            <a>
              <img src="/vercel.svg" />
            </a>
          </Link>
          <Burger {...props} />
        </GlobalContainerHeader>
      </Navigation>
      <main>
        <GlobalContainer>{children}</GlobalContainer>
      </main>
      <footer>
        <GlobalContainer>And here is the bottom</GlobalContainer>
      </footer>
    </>
  );
}
