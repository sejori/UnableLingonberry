import {
  h,
  html,
} from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";
import Burger from "./Burger.js";
import Logo from "./Logo.js";
import MLogo from "./MLogo.js";
import Links from "./Links.js";

const Navbar = ({ navColor, children }) => {
  return html`<nav>
    <${Burger} />
    <${Logo} />
    <${MLogo} />
    <${Links} />
  </nav>`;
};

const burger = `
  display: none;
  width: 30px;
`;

const nav = `
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-height: 88px;
  background-color: #1d2329;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
`;

const navStyle = (navColor) => `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: firebrick;
    background-color: ${navColor};
`;

const mainStyle = `
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
`;

export default Navbar;
