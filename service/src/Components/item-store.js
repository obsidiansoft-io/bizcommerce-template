import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../Redux/store.js';

function privateItem() {
  let item = {};
  function setItem(value) {
    item = value;
  }
  function getItem() {
    return item;
  }
  return {
    getItem,
    setItem
  }
}

let item = privateItem();
class ItemStore extends connect(store)(LitElement) {
  static get properties() {
    return {
      price: { type: Number, hasChanged() { return false } },
      quantity: { type: Number, hasChanged() { return false } },
      image: { type: String, hasChanged() { return false } },
      name: { type: String, hasChanged() { return false } },
      code: { type: String, hasChanged() { return false } }
    }
  }
  firstUpdated() {
    item.setItem({
      price: this.price,
      quantity: this.quantity,
      image: this.image,
      name: this.name,
      code: this.code
    });
  }
  _checkOut() {
    store.dispatch({ type: 'CLEAR_CART' })
    store.dispatch({
      type: 'ADD_ITEM',
      item: item.getItem()
    })
    store.dispatch({ type: 'OPEN_CART' })

  }
  render() {
    return html`
        <slot @click="${this._checkOut}"></slot>
    `;
  }
}

window.customElements.define('item-store', ItemStore);