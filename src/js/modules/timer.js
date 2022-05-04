const timer = (id, deadline) => {
  const getTimeRemaning = (endtime) => {
    const t =  Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          days = Math.floor((t / (1000 * 60 * 60 * 24)));
        

              console.log(days);
          

      return {
        'total': t,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
      }
  }

  const getZero = num => {
    if(num <=9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          seconds = timer.querySelector('#seconds'),
          minutes = timer.querySelector('#minutes'),
          hours = timer.querySelector('#hours'),
          days = timer.querySelector('#days'),
          timerId = setInterval(upSetClock, 1000);

          upSetClock();

      function upSetClock() {
        const t = getTimeRemaning(endtime);

        seconds.textContent = getZero(t.seconds);
        minutes.textContent = getZero(t.minutes);
        hours.textContent = getZero(t.hours);
        days.textContent = getZero(t.days);
       
        if(t.total <= 0) {
           seconds.textContent = '00';
           minutes.textContent = '00';
           hours.textContent = '00';
           days.textContent = '00';

           clearInterval(timerId);
        }
      }
  }
  
 setClock(id, deadline);

}

export default timer;