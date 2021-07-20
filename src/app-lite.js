import { LitElement, html, css } from 'lit-element'
import '@cicciosgamino/images-switch'
import { beer } from './beer'

class AppLite extends LitElement {
  static get styles () {
    return css`
      :host {
        display: block;
        margin: 0;
        padding: 0;

        height: 100vh;
        text-align: center;
      }

      svg {
        padding-top: 5rem;
      }

      p {
        position: absolute;
        width: 100%;
        text-align: center;
        z-index: 10;
      }

      a {
        text-decoration: none;
      }

      a:link {
        color: var(--ciccio-color);
      }

      a:visited {
        color: var(--ciccio-color);
      }

      images-switch {
        --switch-width: 100px;
        --switch-height: 40px;
        --circle-margin: 5px;

        --switch-border: 3px solid whitesmoke;
        --switch-border-checked: 3px solid black;

        /* --switch-bk-ck-color: whitesmoke; */
        --switch-bk-disabled-color: #ccc;

        --circle-bkcolor: #000;
        --circle-ck-bkcolor: whitesmoke;

        --text-font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        --text-font-size: 2rem;
        --text-font-weight: 300;
        --text-absolute-top: -2rem;
        --text-absolute-right: -2rem;

        position: absolute;
        bottom: 5rem;
        z-index: 10;

        transform: translate(-5rem)
      }
    `
  }

  static get properties () {
    return {
      dark: {
        type: Boolean,
        reflect: true
      }
    }
  }

  constructor () {
    super()
    this.addEventListener('change', (event) => {
      this.dark = event.detail.checked
      event.detail.checked ?
        console.log('@DARK') :
        console.log('@LIGHT')
    })
  }

  render () {
    return html`

      <div>
        ${beer}
      </div>

      <div>
        <p>
          <a href="https://www.instagram.com/cicciosgamino/" target="_blank">@cicciosgamino</a>
        </p>
      </div>

      <images-switch .checked=${this.dark}></images-switch>
    `
  }
}

customElements.define('app-lite', AppLite)
