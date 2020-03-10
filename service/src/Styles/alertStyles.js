import { css } from 'lit-element';

export default css`
/* The alert message box */
:host {
  display: none;
  z-index: 9999;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 250px;
  height: 50px;
  padding: 20px;
  background-color: #46A8F5;
  color: white;
  border-radius: 10px;
}
:host([active]) {
  display: inherit;
}
:host([success]) {
  background-color: #6BBD6E; /* Green */
}
:host([danger]) {
  background-color: #f44336; /* Red */
}
.alert {
  z-index: 9999;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 250px;
  height: 50px;
  padding: 20px;
  background-color: #46A8F5;
  color: white;
  border-radius: 10px;
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
`;