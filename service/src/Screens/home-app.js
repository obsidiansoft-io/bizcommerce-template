
import { html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { PageView } from '../Components/page-view';
import { store } from '../Redux/store.js';

class HomeApp extends connect(store)(PageView) {
  openCart() {
    store.dispatch({ type: 'OPEN_CART' })
  }
  render() {
    return html`
      <div>
        Home App
        <button @click="${this.openCart}">Open cart</button>
      </div>
      `;
  }
}

window.customElements.define('home-app', HomeApp);