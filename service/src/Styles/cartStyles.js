import { css } from 'lit-element';
export default css`
  :host {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    visibility: hidden;
    transition-delay: 620ms;
    color: #43484d;
  }
  :host([active]) {
    visibility: visible;
    transition-delay: 0s;
  }
  *[hidden] {
    display: none;
  }
  .shopping-cart {
    width: 750px;
    height: auto;
    min-height: 367px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: auto;
    background: #ffffff;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    z-index: 3;
    animation-name: close-side;
    animation-duration: 300ms;
  }
  .shopping-cart[visible] {
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation-name: show-side;
    animation-duration: 300ms;
  }
  .shopping-cart[hide] {
    -ms-transform: translate(150%, 150%);
    transform: translate(150%, 150%);
  }
  .cart-content[hide] {
    display: none;
  }
  .check-items {
    padding: 20px 30px;
    color: #5e6977;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: auto;
  }
  .card-body {
    padding: 20px;
  }
  .success-pay {
    margin: auto;
    text-align: center;
  }
  .title {
    height: 30px;
    border-bottom: 1px solid #e1e8ee;
    padding: 20px 30px;
    color: #5e6977;
    font-size: 18px;
    font-weight: 400;
    display: flex;
  }
  .title .text {
    width: 50%;
  }
  .title .buttons {
    width: 50%;
    text-align: right;
    margin: 0;
    padding: 0;
  }
  .item {
    padding: 20px 30px;
    height: 120px;
    display: flex;
    justify-content: space-between;
  }

  .item:nth-child(3) {
    border-top: 1px solid #e1e8ee;
    border-bottom: 1px solid #e1e8ee;
  }
  .checkout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .checkout .total-info {
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .total-info:first-child {
    font-weight: bold;
  }
  .checkout .paypal-pay {
    width: 50%;
  }
  .paypal-pay span {
    font-size: 15px;
    color: #43484d;
  }
  @keyframes show-side {
    from {
      -ms-transform: translate(-50%, -150%);
      transform: translate(-50%, -150%);
    }
    to {
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  @keyframes close-side {
    from {
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    to {
      -ms-transform: translate(-50%, -200%);
      transform: translate(-50%, -200%);
    }
  }

  .image {
    margin-right: 50px;
  }
  .image img {
    max-width: 120px;
    height: 100%;
  }
  .description {
    padding-top: 10px;
    margin-right: 60px;
    width: 115px;
  }

  .description span {
    display: block;
    font-size: 14px;
    color: #43484d;
    font-weight: 400;
  }

  .description span:first-child {
    margin-bottom: 5px;
  }
  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939e;
  }
  .quantity {
    padding-top: 20px;
    margin-right: 60px;
  }
  .item-name {
    padding-top: 20px;
  }
  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484d;
    font-weight: 300;
  }
  .total-price {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484d;
    font-weight: 300;
  }
  .paypal-pay {
    width: 50%;
    padding: 10px;
    margin: auto;
  }
  .wait-purchase {
    margin-top: 10px !important;
  }
  .hover {
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: 100%;
      margin: 0;
      bottom: 0;
      position: absolute;
      overflow: hidden;
    }
    .success-pay,
    .check-items {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .item {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }

    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .image img {
      max-width: 80%;
      height: auto;
    }
    .buttons {
      margin-right: 20px;
    }
    .checkout {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .checkout .total-info {
      width: 100%;
      padding: 10px;
    }
    .checkout .paypal-pay {
      width: 100%;
    }
  }
  /** Success icon */
  .success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;
  }
  .success-checkmark .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #6bbd6e;
  }
  .success-checkmark .check-icon::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }
  .success-checkmark .check-icon::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: rotate-circle 4.25s ease-in;
  }
  .success-checkmark .check-icon::before,
  .success-checkmark .check-icon::after {
    content: '';
    height: 100px;
    position: absolute;
    background: #ffffff;
    transform: rotate(-45deg);
  }
  .success-checkmark .check-icon .icon-line {
    height: 5px;
    background-color: #6bbd6e;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
  }
  .success-checkmark .check-icon .icon-line.line-tip {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: icon-line-tip 0.75s;
  }
  .success-checkmark .check-icon .icon-line.line-long {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: icon-line-long 0.75s;
  }
  .success-checkmark .check-icon .icon-circle {
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(76, 175, 80, 0.5);
  }
  .success-checkmark .check-icon .icon-fix {
    top: 8px;
    width: 5px;
    left: 26px;
    z-index: 1;
    height: 85px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: #ffffff;
  }

  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }
  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
  }
`;
