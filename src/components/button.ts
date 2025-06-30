import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("my-button")
export class Button extends LitElement {
    static styles = css`
        :host {
            padding: var(--padding, 5px);
            font-size: var(--size, 20px);
            color: var(--text-color, black);
            background-color: var(--bg-color, lightgray);
            border-radius: var(--border-radius, 5px);
            cursor: pointer;
        }
    `
    @property() callToAction = "Pincha aquí"

    render() {
        return html` <span>${this.callToAction}</span> `
    }
}
