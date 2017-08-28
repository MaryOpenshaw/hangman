
let responseData;
let word;

function get() {
    let url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let responseData = this.responseText.split('\n');
            let size = responseData.length;
            console.log(size);
            word = responseData[parseInt(Math.random() * size)];
            console.log(word);

        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();

}

let aWord = [];

function showWord() {
    for (let a = 0; a < word.length - 1; a++) {
        aWord.push('_ ');
    }

    for (let b = 0; b < aWord.length; b++) {
        document.getElementById('guessed Letters').innerHTML += aWord[b];
    }
}


let d;
let counter;
let val;

function game() {

    let letter = document.getElementById('letter').value;
    let showMessage = '';

    console.log(letter);
    console.log(' ')
    let counter = 7;

    for (let d = 0; d < word.length; d++) {

        if (word[d] === letter) {
            aWord[d] = letter;
            document.getElementById('guessed Letters').innerHTML = aWord.join(' ');
            let val = true;
        }
        if (word[d] !== letter) {
            // if (counter !==0) {
            counter--;
            //counter = counter - 1;
            // }
            /*
            console.log(counter );
            console.log("A"); */

        }
        // let val = false;
        //if(val=false) {
        counter--;
        //}
        // counter= counter-1; 
    }
    // counter --;

    console.log(counter);
    //rope
    if (counter === 6) {

        document.getElementById('hangman').src = "./img/theHangman1.png";
    }
    //head
    if (counter === 5) {

        document.getElementById('hangman').src = "./img/theHangman2.png";
    }
    //body
    if (counter === 4) {

        document.getElementById('hangman').src = "./img/theHangman3.png";
    }
    //left arm
    if (counter === 3) {

        document.getElementById('hangman').src = "./img/theHangman4.png";
    }

    //rght arm
    if (counter === 2) {
        document.getElementById('hangman').src = "./img/theHangman5.png";
    }

    //rght leg
    if (counter === 1) {
        document.getElementById('hangman').src = "./img/theHangman6.png";

    }

    //rght leg
    if (counter = 0) {
        document.getElementById('hangman').src = "./img/theHangman7.png";
    }
}

