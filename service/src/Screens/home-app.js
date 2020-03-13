
import { html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { PageView } from '../Components/page-view';
import { store } from '../Redux/store.js';

import '../Components/item-store';

class HomeApp extends connect(store)(PageView) {
  openCart() {
    store.dispatch({ type: 'OPEN_CART' })
  }
  render() {
    return html`
      <div>
        Home App
      
        <item-store name="Tenis shidos" code="3562" image="https://designmodo.com/demo/shopping-cart/item-1.png" quantity="1" price="150">
          <button >Buy now</button>
        </item-store>
      </div>
      `;
  }
}

window.customElements.define('home-app', HomeApp);