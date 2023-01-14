const cardCurrentTime = document.querySelectorAll('.dashboard__card-current-time');
const cardPreviousTime = document.querySelectorAll('.dashboard__card-previous-time');
const buttons = document.querySelectorAll('.dashboard__card-control');
let dataTime;


fetch('/data.json')
  .then(response => response.json())
  .then(data => dataTime = data)


buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {button.removeAttribute('data-active')});
    button.setAttribute('data-active', '');
    setTime(dataTime, button.dataset.type);
  });
})


function setTime(obj, type) {
  if (type === 'daily') {
    for (let i = 0; i < obj.length; i++) {
			cardCurrentTime[i].innerHTML = `${obj[i].timeframes.daily.current}hrs`;
			cardPreviousTime[i].innerHTML = `Yesterday - ${obj[i].timeframes.daily.previous}hrs`;
		}
  } else if (type === 'weekly') {
    for (let i = 0; i < obj.length; i++) {
			cardCurrentTime[i].innerHTML = `${obj[i].timeframes.weekly.current}hrs`;
			cardPreviousTime[i].innerHTML = `Last Week - ${obj[i].timeframes.weekly.previous}hrs`;
		}
  } else {
    for (let i = 0; i < obj.length; i++) {
			cardCurrentTime[i].innerHTML = `${obj[i].timeframes.monthly.current}hrs`;
			cardPreviousTime[i].innerHTML = `Last Month - ${obj[i].timeframes.monthly.previous}hrs`;
		}
  }
}


