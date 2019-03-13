let options = [
    {
        value: 'dog',
        sound: 'audio/animals/dog.mp3'
	},
	{
        value: 'cat',
        sound: 'audio/animals/cat.mp3'
	},
	{
        value: 'pig',
        sound: 'audio/animals/pig.mp3'
	},
	{
        value: 'sheep',
        sound: 'audio/animals/sheep.mp3'
	}
];

let currentSample;

let pickAnimal = function() {
	let randomIndex = Math.floor(Math.random() * options.length);
    
    currentSample = options[randomIndex];
    
    let audio = new Audio(currentSample.sound);
    audio.play();
    
}

document.getElementById("start").addEventListener("click", pickAnimal);


let onClick = function(event) {
    // Här använder vi event.currentTarget, dvs klickna div'en och dataset.animal får värdet från [data-animal]
	let clickedAnimal = event.currentTarget.dataset.animal;
    
    if (currentSample.value == clickedAnimal) {
        let win = new Audio("./audio/animals/win.mp3");
        win.play(); 
    } 
    
    else {
        let again = new Audio("./audio/animals/tryagain.mp3"); 
        again.play(); 
    }
};

let imgs = document.getElementsByClassName('animalfloat');

for (let i = 0; imgs.length > i; i++) {
    imgs[i].addEventListener('click', onClick);
}