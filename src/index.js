import "./styles/index.scss";
import sounds from "./sounds";

// State for tracking playback
let isPlaying = false;
let playingId = null;

function createSoundItem(sound, soundsImageBg, soundOutput) {
	const div = document.createElement("div");
	div.className = "sounds__item";
	div.style.background = `url(${sound.background}) center/cover no-repeat`;

	const img = document.createElement("img");
	img.id = `sounds-item-img-${sound.id}`;
	img.src = sound.icon;
	img.alt = `Sound ${sound.id}`;
	img.className = "sounds__item-icon";

	div.appendChild(img);

	// Handle click to play/pause sound and update background
	div.addEventListener("click", () => {
		// Reset all icons to their default state
		document.querySelectorAll(".sounds__item-icon").forEach((icon, idx) => {
			icon.src = sounds[idx].icon;
		});

		// Update background
		soundsImageBg.style.background = `url(${sound.background}) center/cover no-repeat`;

		// Toggle play/pause
		if (isPlaying && playingId === sound.id) {
			img.src = "./assets/icons/pause.svg";
			soundOutput.pause();
			isPlaying = false;
			playingId = null;
		} else {
			img.src = sound.icon;
			soundOutput.src = sound.sound;
			soundOutput.play().catch((error) => {
				console.error("Failed to play sound:", error);
			});
			isPlaying = true;
			playingId = sound.id;
		}
	});

	return div;
}

document.addEventListener("DOMContentLoaded", () => {
	// Query DOM elements once
	const container = document.querySelector("#sounds-container");
	const soundOutput = document.querySelector("#sound-output");
	const soundsImageBg = document.querySelector("#sounds-image-bg");
	const volumeInput = document.querySelector("#volume-input");

	// Validate elements
	if (!container || !soundOutput || !soundsImageBg || !volumeInput) {
		console.error("Required DOM elements not found");
		return;
	}
	if (!sounds || sounds.length === 0) {
		console.error("Sounds array is empty or undefined");
		return;
	}

	// Render sound items
	container.innerHTML = "";
	sounds.forEach((sound) => {
		container.appendChild(createSoundItem(sound, soundsImageBg, soundOutput));
	});

	// Initialize volume and track fill
	soundOutput.volume = volumeInput.value / 100;
	volumeInput.style.setProperty("--value", volumeInput.value);

	// Volume control
	volumeInput.addEventListener("input", (e) => {
		const value = e.target.value;
		soundOutput.volume = value / 100;
		volumeInput.style.setProperty("--value", value);
	});
});
