import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../Redux/store.js';
import { notify } from './notify-bar';
import 'fa-icons';
import './loader-app';

import styles from '../Styles/cartStyles';

class CartApp extends connect(store)(LitElement) {
  static get properties() {
    return {
      _active: { type: Boolean, attribute: false },
      _items: { type: Array },
      _total: { type: Number },
      _currency: { type: String },
      _loading: { type: Boolean, attribute: false },
      _onPay: { type: Boolean, attribute: false },
      _successPay: { type: Boolean, attribute: false },
      _payerInfo: { type: Object, attribute: false }
    };
  }
  static get styles() {
    return [styles];
  }
  constructor() {
    super();
    this._active = false;
    this._total = 100;
    this._cuantity = 1;
    this._loading = false;
    this._successPay = false;
    this._payerInfo = {
      name: '',
      emial: ''
    };
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          this._loading = true;
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this._total
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(details => {
            store.dispatch({ type: 'CLEAR_CART' });
            this._payerInfo = {
              name: details.payer.name.given_name,
              emial: details.payer.email_address
            };
            this._loading = false;
            this._successPay = true;
          });
        },
        onError: error => {
          notify('Transaction error ', 'danger');
          this._loading = false;
          this._successPay = false;
        },
        onCancel: data => {
          this._loading = false;
          this._successPay = false;
        }
      })
      .render('#paypal-button-container');
  }
  _close() {
    this._successPay = false;
    this._payerInfo = {
      name: '',
      emial: ''
    };
    store.dispatch({ type: 'CLEAR_CART' });
    store.dispatch({ type: 'CLOSE_CART' });
  }

  render() {
    return html`
      <div
        class="shopping-cart"
        ?visible="${this._active}"
        ?hide="${!this._active}"
      >
        <div class="title">
          <div class="text">
            Checkout
          </div>
          <div class="buttons" @click="${this._close}">
            <span class="delete-btn">
              <fa-icon class="fas fa-times"></fa-icon>
            </span>
          </div>
        </div>
        <div class="card-body">
          <div
            class="cart-content"
            ?hide="${this._loading || this._successPay}"
          >
            ${this._items.map(
              item => html`
                <div class="item">
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
                </div>
              `
            )}
            ${this._items.length > 0
              ? html`
                  <div class="checkout">
                    <div class="total-info">
                      <div>Total:</div>
                      <div>$${this._total}</div>
                    </div>
                    <div class="paypal-pay">
                      <span>Checkout with Paypal</span>
                      <slot name="paypal-check"></slot>
                    </div>
                  </div>
                `
              : html`
                  <span class="check-items">No items</span>
                `}
          </div>
          <div class="check-items" ?hidden="${!this._loading}">
            <loader-app ?loading="${this._loading === true}"></loader-app>
            <span class="wait-purchase">Waiting for purchase confirmation</span>
          </div>
          <div class="success-pay" ?hidden="${!this._successPay}">
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
            <h3 class="success-message">Successful Payment</h3>
            <span class="payer-message">
              Thanks ${this._payerInfo.name} for buying, we send an email to
              ${this._payerInfo.emial} to track your purchase.
            </span>
          </div>
        </div>
      </div>
      <div class="hover" @click="${this._close}"></div>
    `;
  }
  stateChanged(state) {
    this._active = state.cart.visible;
    this._items = state.cart.items;
    this._total = 0;
    for (let item of state.cart.items) {
      this._total += item.price * item.quantity;
    }
  }
}

window.customElements.define('cart-app', CartApp);
