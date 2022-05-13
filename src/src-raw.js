import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

import Navbar from "./components/Navbar.js";

// This component is rendered in the render step. It used to import Exec and Styles and add them to the returned html below.
// Now Exec and Styles have been converted to HTML files and are added to the HTML template in the template step (see app.ts line 65).
const NavbarRawComponent = ({ server_time }) => {
  return html`
    <${Navbar} />
    <p>Time of server request: <strong>${server_time}</strong></p>
    <p>
      Time of latest render: <strong>${Date.now()}</strong> ${"<"}- changes with
      hydration!
    </p>
  `;
};

export default NavbarRawComponent;
