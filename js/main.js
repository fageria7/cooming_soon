const countdown = document.querySelector('.countdown');
const heading = document.querySelector('.landing-h1');
const image = document.querySelector('.landing-img');

//set launch date (ms)
const launchDate = new Date('apr 29, 2021 19:52:00').getTime();

//update every sec
const intvl = setInterval(() => {
	//get todays date and time(ms)
	const now = new Date().getTime();

	//distance from now to launch date
	const distance = launchDate - now;

	//calculations
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	//display the results
	countdown.innerHTML = `
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${mins}<span>Minutes</span></div>
		<div>${seconds}<span>Seconds</span></div>
	`;

	//if launch date passed
	if (distance < 0) {
		//stop countdown
		clearInterval(intvl);
		//style and output text
		// heading.style.display = 'none';
		// image.style.width = '400px';
		// image.style.height = '500px';
		countdown.style.color = '#17a2b8';
		countdown.innerHTML = 'Launched!';
	}
},1000);
