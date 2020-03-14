import { css } from 'lit-element';
export default css`
:host {
  background-color: rgba(0,0,0,.8);
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 1;
  visibility: hidden;
  transition-delay: 620ms;
}
:host([active]) {
  visibility: visible;
  transition-delay: 0s;
}
.shopping-cart {
  width: 750px;
  height: 423px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;

  background: #FFFFFF;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  z-index: 3;
  animation-name: close-side;
  animation-duration: 300ms;
}
.shopping-cart[visible]{
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation-name: show-side;
  animation-duration: 300ms;
  
}
.shopping-cart[hide]{
  -ms-transform: translate(150%, 150%);
  transform: translate(150%, 150%);
}
.cart-content[hide] {
  display: none;
}
.check-items {
  padding: 20px 30px;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  
}
.title {
  height: 60px;
  border-bottom: 1px solid #E1E8EE;
  padding: 20px 30px;
  color: #5E6977;
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
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
}
 
@keyframes show-side {
  from {
    -ms-transform: translate(-50%,-150%);
    transform: translate(-50%,-150%);
  }
  to {
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
  }
}
@keyframes close-side {
  from {
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
  }
  to {
    -ms-transform: translate(-50%,-200%);
    transform: translate(-50%,-200%);
  }
}

.image {
  margin-right: 50px;
}
 
Let’s add some basic style to  product name and description.
.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}
 
.description span {
  display: block;
  font-size: 14px;
  color: #43484D;
  font-weight: 400;
}
 
.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939E;
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
  color: #43484D;
  font-weight: 300;
}
.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
.paypal-pay {
  width: 50%;
  padding: 10px;
  margin: auto;
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
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
  
}
`;