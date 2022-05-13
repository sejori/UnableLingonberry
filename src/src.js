import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

import Navbar from "./components/Navbar.js";

const NavbarComponent = ({ server_time }) => {
  return html`
    <${Navbar} />
    <p>Time of server request: <strong>${server_time}</strong></p>
    <p>
      Time of latest render: <strong>${Date.now()}</strong> ${"<"}- changes with
      hydration!
    </p>
  `;
};

export default NavbarComponent;
