import {createRoot} from "react-dom/client";
import {ThemeProvider} from "@ui5/webcomponents-react";
import {PageComponent} from "./PageComponent";

class PageElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const root = createRoot(this.shadowRoot);
        root.render(
            <ThemeProvider>
                <PageComponent/>
            </ThemeProvider>
        );
    }
}

window.customElements.define('page-element', PageElement);