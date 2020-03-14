import alertStyles from '../Styles/alertStyles';

export function notify(txt, type = 'primary') {
  let area = document.querySelector('.notify-area');
  let style = document.createElement('style');
  style.textContent = alertStyles;
  let alert = document.createElement('div');
  alert.className = 'alert ' + type;
  alert.innerHTML = `${txt}<span class="closebtn" onclick="this.parentElement.className='alert ${type} hide';">&times;</span>`;
  area.appendChild(style);
  area.appendChild(alert);
  setTimeout(function () {
    alert.className += ' hide';
  }, 3000);
  setTimeout(function () {
    area.removeChild(alert);
    area.removeChild(style);
  }, 3670);

}