import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("my-link")
export class Link extends LitElement {
    static styles = css`
        a {
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        /* Types */
        .primary {
            color: var(--color-primary, #6200ea);
        }
        .primary:hover {
            color: var(--color-primary-dark, #3700b3);
        }
        .primary:active {
            color: var(--color-primary-light, #bb86fc);
        }
        .primary:focus {
            color: var(--color-primary-dark, #3700b3);
        }

        .secondary {
            color: var(--color-secondary, #03dac6);
        }
        .secondary:hover {
            color: var(--color-secondary-dark, #3700b3);
        }
        .secondary:active {
            color: var(--color-secondary-light, #bb86fc);
        }
        .secondary:focus {
            color: var(--color-secondary-dark, #3700b3);
        }

        /* Sizes */
        .small {
            font-size: var(--text-xs, 0.75rem);
        }

        .medium {
            font-size: var(--text-sm, 1rem);
        }

        .large {
            font-size: var(--text-xl, 1.2rem);
        }
    `

    @property() type: "primary" | "secondary" = "primary"
    @property() size: "small" | "medium" | "large" = "medium"

    render() {
        console.log("Using custom styles")
        const classes = `${this.type} ${this.size}`
        return html`<a class=${classes}><slot></slot></a>`
    }
}
