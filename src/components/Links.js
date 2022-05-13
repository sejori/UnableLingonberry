import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";

const Links = () => {
  return html`<ul class="nav-links">
    <li onClick="toggleDropDown(this,0)">
      <a href="#" class="nav-item" id="navItem">Stream</a>
      <span class="down-arrow">
        <svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </span>
      <span class="up-arrow show">
        <svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label="Expand Menu"
        >
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
        </svg>
      </span>
      <ul class="sub-menu">
        <li class="sub-menu-item">
          <a
            href="/stream/"
            aria-label="Explore STREAM"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Explore STREAM</a
          >
        </li>

        <li class="sub-menu-item">
          <a
            href="/stream/packages/"
            aria-label="Packages &amp; pricing"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Packages &amp; pricing</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/stream/channel-lineup/"
            aria-label="Channel lineup"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Channel lineup</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/stream/directv-stream-vs-cable/"
            aria-label="Switch to STREAM"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Switch to STREAM</a
          >
        </li>

        <li class="sub-menu-item">
          <a
            href="/stream/sports/"
            aria-label="Sports"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Sports</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/stream/premium-channels/"
            aria-label="Premium networks"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Premium networks</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/stream/technology/"
            aria-label="Technology"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Technology</a
          >
        </li>
      </ul>
    </li>
    <li onClick="toggleDropDown(this,1)">
      <a href="#" class="nav-item" id="navItem">Satellite</a>
      <span class="down-arrow"
        ><svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </span>
      <span class="up-arrow show">
        <svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label="Expand Menu"
        >
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
        </svg>
      </span>
      <ul class="sub-menu">
        <li class="sub-menu-item">
          <a
            href="/satellite/"
            aria-label="Explore satellite"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Explore satellite</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/satellite/packages/"
            aria-label="Packages &amp; pricing"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Packages &amp; pricing</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="https://www.directv.com/satellite/spanish/"
            aria-label="Spanish packages"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Spanish packages</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/satellite/channel-lineup/"
            aria-label="Channel lineup"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Channel lineup</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/satellite/sports/"
            aria-label="Sports"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Sports</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/sports/nfl/"
            aria-label="NFL SUNDAY TICKET"
            tabindex="0"
            rel="noopener"
            target="_self"
            >NFL SUNDAY TICKET</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/satellite/premium-channels/"
            aria-label="Premium networks"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Premium networks</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/satellite/technology/"
            aria-label="Technology"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Technology</a
          >
        </li>
        <li class="sub-menu-item"></li>
      </ul>
    </li>
    <li onClick="toggleDropDown(this,2)">
      <a href="#" class="nav-item" id="navItem">Explore</a>
      <span class="down-arrow"
        ><svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </span>
      <span class="up-arrow show">
        <svg
          class="MuiSvgIcon-root-3894"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label="Expand Menu"
        >
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
        </svg>
      </span>
      <ul class="sub-menu">
        <li class="sub-menu-item">
          <a
            href="/deals/"
            aria-label="Deals"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Deals</a
          >
        </li>

        <li class="sub-menu-item">
          <a
            href="/internet-bundles/"
            aria-label="Bundles"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Bundles</a
          >
        </li>
        <li class="sub-menu-item">
          <a
            href="/pick-the-best-package/"
            aria-label="Help me choose"
            tabindex="0"
            rel="noopener"
            target="_self"
            >Help me choose</a
          >
        </li>
      </ul>
    </li>
  </ul>`;
};

export default Links;
