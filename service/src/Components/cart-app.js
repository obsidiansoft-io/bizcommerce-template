import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../Redux/store.js';
import { notify } from './notify-bar';
import 'fa-icons';

import styles from '../Styles/cartStyles'

class CartApp extends connect(store)(LitElement) {
    static get properties() {
        return {
            _active: { type: Boolean, attribute: false },
            _items: { type: Array },
            _total: { type: Number },
            _currency: { type: String },
            _loading: { type: Boolean }
        }
    }
    static get styles() {
        return [styles];
    }
    constructor() {
        super();
        this._active = false;
        this._currency = 'MXN';
        this._total = 100;
        this._cuantity = 1;
        this._loading = false;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        paypal.Buttons({
            createOrder: (data, actions) => {
                this._loading = true;
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: this._total,
                            currency_code: this._currency
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                // This function captures the funds from the transaction.
                return actions.order.capture().then((details) => {
                    // This function shows a transaction success message to your buyer.
                    notify('Transaction completed by ' + details.payer.name.given_name, 'success');
                    this._loading = false;
                });
            },
            onError: error => {
                notify('Transaction error ', 'danger');
            }
        }).render('#paypal-button-container');
    }
    close() {
        store.dispatch({ type: 'CLOSE_CART' })
    }
    render() {
        return html`
    <div class="shopping-cart">
        <div class="title">
          <div class="text">
            Sharabiz Cart ${this._loading}
          </div>
          <div class="buttons" @click="${this.close}">
            <span class="delete-btn">
              <fa-icon class="fas fa-times"></fa-icon>
            </span>
          </div>
        </div>
        ${this._items.map(item => html`<div class="item">
          <div class="image">
            <img src="${item.image}" alt="" />
          </div>
          <div class="item-name">
            ${item.name}
          </div>
          <div class="quantity">
            ${item.quantity}
          </div>
          <div class="total-price">$${item.price * item.quantity}</div>
        </div>`)}
        
        <div class="paypal-pay">
          <slot name="paypal-check"></slot>
        </div>
      </div>
      <div class="hover" @click="${this.close}"></div>`;
    }
    stateChanged(state) {
        this._active = state.cart.visible
        this._items = state.cart.items;
        this._total = 0;
        for (let item of state.cart.items) {
            this._total += item.price * item.quantity;
        }
    }
}

window.customElements.define('cart-app', CartApp);