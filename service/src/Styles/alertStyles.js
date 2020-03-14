import { css } from 'lit-element';

export default css`/*css*/
.alert {
  z-index: 9999;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 250px;
  height: 50px;
  padding: 20px;
  background-color: #46A8F5;
  color: white;
  border-radius: 10px;
  animation-name: open-notify;
  animation-duration: 300ms;
}
.alert.success {
  background-color: #6BBD6E; /* Green */
}
.alert.danger {
  background-color: #f44336; /* Green */
}
.alert.hide{
  animation-name: close-notify;
  animation-duration: 300ms;
  top: -100%;
}


/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
}
@keyframes open-notify {
  from {
    top: -40px;
  }
  to {
    top: 20px;
  }
}
@keyframes close-notify {
  from {
    top: 20px;
  }
  to {
    top: -100%;
  }
}
`;