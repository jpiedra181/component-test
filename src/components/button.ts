import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("my-button")
export class Button extends LitElement {
    static styles = css`
        button {
            border: none;
            color: white;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        /* Types */
        .primary {
            background-color: var(--color-primary, #6200ea);
        }
        .primary:hover {
            background-color: var(--color-primary-dark, #3700b3);
        }
        .primary:active {
            background-color: var(--color-primary-light, #bb86fc);
        }
        .primary:focus {
            background-color: var(--color-primary-dark, #3700b3);
        }

        .secondary {
            background-color: var(--color-secondary, #03dac6);
        }
        .secondary:hover {
            background-color: var(--color-secondary-dark, #3700b3);
        }
        .secondary:active {
            background-color: var(--color-secondary-light, #bb86fc);
        }
        .secondary:focus {
            background-color: var(--color-secondary-dark, #3700b3);
        }

        .outline {
            background-color: transparent;
            border: 1px solid var(--color-primary, #6200ea);
            color: var(--color-primary, #6200ea);
        }
        .outline:hover {
            background-color: var(--color-primary-light, #bb86fc);
            color: white;
        }
        .outline:active {
            background-color: var(--color-primary-dark, #3700b3);
            color: white;
        }
        .outline:focus {
            background-color: var(--color-primary-dark, #3700b3);
            color: white;
        }
        /* Sizes */
        .small {
            padding: var(--padding-btn);
            font-size: var(--text-xs, 0.75rem);
            border-radius: var(--radius-btn, 4px);
        }

        .medium {
            padding: var(--padding-btn);
            font-size: var(--text-sm, 1rem);
            border-radius: var(--radius-btn, 6px);
        }

        .large {
            padding: var(--padding-btn);
            border-radius: var(--radius-btn, 8px);
        }
    `

    @property() type: "primary" | "secondary" | "outline" = "primary"
    @property() size: "small" | "medium" | "large" = "medium"
    @property() tailwind: "true" | "false" = "false"

    render() {
        console.log("Using custom styles")
        const classes = `${this.type} ${this.size}`
        return html`<button class=${classes}><slot></slot></button>`
    }
}
