const clock = document.querySelector('.clock');

const tick = () => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	let html = `
    <div>${hours > 9 ? hours : '0' + hours}</div> : 
    <div>${minutes > 9 ? minutes : '0' + minutes}</div> : 
    <div>${seconds > 9 ? seconds : '0' + seconds}</div>`;
	clock.innerHTML = html;
};

setInterval(tick, 1000);
