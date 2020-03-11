import { LitElement, html } from 'lit-element';
import alerStyles from '../Styles/alertStyles';
import alertStyles from '../Styles/alertStyles';

class NotifyBar extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean },
      error: { type: Boolean }
    };
  }

  static get styles() {
    return [
      alerStyles
    ];
  }
  render() {
    return html`
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      <slot></slot>
    `;
  }
}

export function notify(txt, type = 'primary') {
  let area = document.querySelector(".notify-area").attachShadow({ mode: 'open' });
  let style = document.createElement('style');
  style.textContent = alertStyles;
  let alert = document.createElement("div");
  document.querySelector(".notify-area").setAttribute(type, '');
  alert.innerHTML = `${txt}<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>`;
  area.appendChild(style);
  area.appendChild(alert);
  setTimeout(function () {
    area.removeChild(alert);
    area.removeChild(style);
  }, 3000);

}
window.customElements.define('notify-bar', NotifyBar);