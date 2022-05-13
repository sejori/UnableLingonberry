import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

const MLogo = () => {
  return html`<div class="m-logo">
    <a href="/" title="DIRECTV home" aria-label="DIRECTV home" rel="noopener">
      <span aria-hidden="true" tabindex="-1" class="jss250">
        <svg
          version="1.1"
          id="directv"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 41.56 57.17"
          xml:space="preserve"
          width="29"
          height="29"
        >
          <style>
            .st0 {
              fill: #ffffff;
            }

            .st1 {
              fill: #3e77bc;
            }
          </style>
          <path
            class="st0"
            d="M35.78,5.43C32.09,1.59,26.69,0,19.92,0H0v42.75c3.61-1.41,7.34-2.78,11.18-4.12V9.91h8.55c3.69,0,6.47,1.28,8.25,3.52c2.15,2.71,2.36,5,2.36,19.16c3.65-1.04,11.21-3,11.21-3C41.56,15.86,41.57,11.47,35.78,5.43"
          ></path>
          <path
            class="st1"
            d="M20.85,57c6,0,11.45-1.67,15.27-5.4c3.05-3.01,4.97-6.97,5.44-11.22C28.86,44.91,16.55,50.47,4.75,57H20.85z"
          ></path>
        </svg>
      </span>
    </a>
  </div>`;
};

export default MLogo;
