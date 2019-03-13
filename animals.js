// skapar en array med våra valmöjligheter som objekt med två value-key par. 
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

// initialize currentSample för att använda senare
let currentSample;

/* funktion för att slumpmässigt välja ett djur.
randomIndex slumpar ett tal mellan så många val vi har.
currentSample sätts till ett av djuren med hjälp av index. 
spelar slutligen upp ljudet som är kopplat till djuret. 
*/
let pickAnimal = function() {
	let randomIndex = Math.floor(Math.random() * options.length);
    
    currentSample = options[randomIndex];
    
    let audio = new Audio(currentSample.sound);
    audio.play(); 
}

// kopplar funktionen till att köras när någon klickar på ljudknappen 
document.getElementById("start").addEventListener("click", pickAnimal);


/* funktion för att avgöra om det är rätt eller fel 
ger clickedAnimal värdet av den tryckta bilden. 
använder ett if statement, om den är samma som värdet av currentSample
spelas ett vinnarljud. 
annars ber den användaren försöka igen*/

let onClick = function(event) {
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

/* använder en foor loop för att sätta funktionen ovan på 
samtliga djurbilder då någon klickar. */
let imgs = document.getElementsByClassName('animalfloat');

for (let i = 0; imgs.length > i; i++) {
    imgs[i].addEventListener('click', onClick);
}