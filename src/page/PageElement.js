import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { PageComponent } from "./PageComponent";
import { StyleProvider } from "../StyleProvider";

class PageElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const root = createRoot(this.shadowRoot);
    root.render(
      <StyleProvider shadowRoot={this.shadowRoot}>
        <ThemeProvider>
          <PageComponent />
        </ThemeProvider>
      </StyleProvider>,
    );
  }
}

window.customElements.define("page-element", PageElement);
