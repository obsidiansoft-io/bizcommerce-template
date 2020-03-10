import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../Redux/store.js';
import 'fa-icons';

import styles from '../Styles/cartStyles'

class CartApp extends connect(store)(LitElement) {
    static get properties() {
        return {
            active: { type: Boolean, attribute: false },
            items: { type: Array }
        }
    }
    static get styles() {
        return [styles];
    }
    constructor() {
        super();
        this.active = false;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        paypal.Buttons({
            createOrder: function (data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '1300',
                            currency_code: 'MXN'
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function (details) {
                    // This function shows a transaction success message to your buyer.
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
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
        Sharabiz Cart 
    </div>
    <div class="buttons" @click="${this.close}">
      <span class="delete-btn">
        <fa-icon class="fas fa-times"></fa-icon>
      </span>
    </div>
  </div>
  <div class="item">
    <div class="image">
        <img src="https://designmodo.com/demo/shopping-cart/item-1.png" alt="" />
    </div>
    <div class="description">
        <span>Common Projects</span>
        <span>Bball High</span>
        <span>White</span>
    </div> 
    <div class="quantity">
      <input type="text" name="name" value="1">
    </div>
        <div class="total-price">$549</div>
    </div>
    <div class="paypal-pay">
        <slot name="paypal-check"></slot>
    </div>
</div>
<div class="hover" @click="${this.close}"></div>
        `;
    }
    stateChanged(state) {
        this.active = state.cart.visible
        this.items = state.cart.items;
    }
}

window.customElements.define('cart-app', CartApp);