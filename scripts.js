const messageText = document.getElementById('text');
const messageOpen = document.getElementById('open-message');
const messageClose = document.getElementById('close-message');

let i = 0;
messageOpen.addEventListener('click', () => {
	messageText.classList.add('add');
	messageOpen.classList.add('remove');
	if (i === 0) {
		i++;
		const typed2 = new Typed('.typing-text-message', {
			strings: [
				"Hi there, I am Sehili Chams Eddine, an inspired web developer like you, and I want to welcome you to this simple roadmap, which will be your first step toward becoming a professional web developer. Don't forget to bring coffee and enjoy learning!",
			],
			typeSpeed: 75, // Speed of typing
			backSpeed: 100, // Speed of backspacing
			backDelay: 1000, // Delay before starting to backspace
			startDelay: 100, // Delay before starting typing
			loop: false, // Whether to loop the typing effect
			showCursor: false,
		});
	}
});
messageClose.addEventListener('click', () => {
	messageText.classList.remove('add');
	messageOpen.classList.remove('remove');
});
const st = `<h1>Welcome To <br> The Web <br> Development<br><span>Roadmap</span></h1>
<h2>Start Your Web Development Journey today</h2>
<p>Unlock the tools, technologies, and knowledge to become a web developer.<br> Let’s build your future!</p>`;

const buttonHTML =
	'<a href="#roadmap" class="cta-button fade-in">Explore Roadmap</a>';

const typed = new Typed('.typing-text', {
	strings: [st],
	typeSpeed: 75, // Speed of typing
	backSpeed: 100, // Speed of backspacing
	backDelay: 1000, // Delay before starting to backspace
	startDelay: 50, // Delay before starting typing
	loop: false, // Whether to loop the typing effect
	showCursor: false,
	html: true, // Allow HTML content
	onComplete: () => {
		// Add a delay before showing the button
		setTimeout(() => {
			document.querySelector('.typing-text').innerHTML += buttonHTML;
		}, 500); // Delay of 500ms
	},
});
