const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };        
    };

    const addZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              day = timer.querySelector('#days'),
              hour = timer.querySelector('#hours'),
              minute = timer.querySelector('#minutes'),
              second = timer.querySelector('#seconds');
        
        const updateClock = () => {
            const timeRemaining = getTimeRemaining(endtime);

            day.innerHTML = addZero(timeRemaining.days);
            hour.innerHTML = addZero(timeRemaining.hours);
            minute.innerHTML = addZero(timeRemaining.minutes);
            second.innerHTML = addZero(timeRemaining.seconds);

            if (timeRemaining.total <= 0) {
                clearInterval(timeInterval);
                day.innerHTML = '00'; 
                hour.innerHTML = '00';
                minute.innerHTML = '00'; 
                second.innerHTML = '00';
            }
        };

        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
    };

    setClock(id, deadline);
};

export default timer;