import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../Redux/store.js';

class ItemStore extends connect(store)(LitElement) {
  static get properties() {
    return {
      price: { type: Number },
      quantity: { type: Number },
      image: { type: String },
      name: { type: String },
      code: { type: String }
    }
  }
  checkOut() {
    store.dispatch({ type: 'CLEAR_CART' })
    store.dispatch({
      type: 'ADD_ITEM',
      item: {
        price: this.price,
        quantity: this.quantity,
        image: this.image,
        name: this.name,
        code: this.code
      }
    })
    store.dispatch({ type: 'OPEN_CART' })

  }
  render() {
    return html`
        <slot @click="${this.checkOut}"></slot>
    `;
  }
}

window.customElements.define('item-store', ItemStore);