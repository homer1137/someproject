import styled from "styled-components";
import Link from "next/link";
import { Switcher } from "../styles/Switcher";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around ;
  align-items: center;
  li {
    padding:  1.3rem;
  }
  li:last-child {
    padding: 0.3rem 1rem 0 4rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props=>props.theme.colorsUiBase};
    
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    box-shadow: ${props=>props.theme.shadow};
    justify-content: center ;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    li:last-child {
    position: relative ;
      padding: 4rem 0rem;
    left: 0.8rem;
  }
    
  }
`;

const RightNav = ({ open, ...props }) => {
  const themTogl = props.themeToggler;
  const theme = props.theme;
  

  return (
    <Ul open={open}>
      <li>
        <Link href={"/"}>
          <a>Main</a>
        </Link>
      </li>
      <li>
        <Link href={"/products"}>
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link href={"/cms"}>
          <a>CMS</a>
        </Link>
      </li>

      <li>
        <div>
          <Switcher onClick={themTogl} />
          {theme === "light" ? (
            <IoMoonOutline
              size="1rem"
              style={{
                position: "relative",
                bottom: "0.4rem",
                left: "-4.6rem",
                color: "#191919",
                userSelect: 'none' 
              }}
            ></IoMoonOutline>
          ) : (
            <IoSunnyOutline
              size="1.2rem"
              style={{ position: "relative", bottom: "0.3rem", left: "0.2rem",  userSelect: 'none' }}
            />
          )}
        </div>
      </li>
    </Ul>
  );
};

export default RightNav;
