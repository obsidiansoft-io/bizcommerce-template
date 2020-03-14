import {LitElement, css, html} from 'lit-element';


class LoaderApp extends LitElement {
  shouldUpdate(){
    return this.loading;
  }
  static get properties(){
    return {
      loading: {type: Boolean}
    }
  }
  static get styles(){
    return css`
    :host {
      display: none;
    }
    :host([loading]){
      display: block;
    }
    .lds-dual-ring {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid rgb(94, 105, 119);
      border-color: rgb(94, 105, 119) transparent rgb(94, 105, 119) transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`;
  }
  render(){
    return html`<div class="lds-dual-ring"></div>`;
  }
}
window.customElements.define('loader-app', LoaderApp);