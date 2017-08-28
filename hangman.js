
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
    for (let a = 0; a < word.length-1; a++) {
        aWord.push('_ ');
    }

    for (let b = 0; b < aWord.length; b++) {
        document.getElementById('guessed Letters').innerHTML += aWord[b];
    }
}

let counter = 7;
let d;
function game() {
    
    let letter = document.getElementById('letter').value;
    let showMessage = '';

    console.log(letter);
    console.log(' ')


    for (let d = 0; d < word.length; d++) {
        // console.log(d);
        if (word[d] === letter) {
            aWord[d] = letter;
            document.getElementById('guessed Letters').innerHTML = aWord.join(' ');
        }

/*
        if (word[d] !== letter) {
            counter--;
            console.log (counter);
        }

       // document.getElementById('guessed Letters').innerHTML = aWord.join(' ');
       */
    }
}


/*

if (letter.length !== 1) {
}
else {
    let d = 0;
    if (word[d] === letter) {
        aWord[d] = letter;
        showMessage = 'yes ' + letter + ' this letter is in the word';
    }
    document.getElementById('guessed Letters').innerHTML = aWord.join(' ');
}




}
/*
    let lettersLeft = 0;
    for (d = 0; d < word.length; d++) {
        if (aword[d] === '_ ') {
            lettersLeft += 1;
        }
    }

	if (lettersLeft == 0) {
        showMessage = 'YES! You guessed the word';
    }

    if (showMessage === '') {
        showMessage = 'Sorry, no ' +letter;
    }
    
    // Update the puzzle
    //document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById('guessed Letters').innerHTML = aWord.join(' ');
    // Lend a hand by clearing out their last guess
    document.getElementById('letter').value = '';
}


/*

for (let d = 0; d < word.length; d++) {
    // console.log(d);
    if (word[d] === letter) {
        aWord[d] = letter;
    }
    if (word[d] !== letter) {
        counter--;
    }
}
}
/*
    for (e = 0; e < word.length; e++){  
        if (word[d] === '_') {

        }
    }
}
       // aWord.join(letter);
       // aWord.push(letter);  

       // aWord.push(letter);
/*
        if (letter === word[d]) {
            for (let a = 0; a < word.length; a++) {
                aWord.push(letter);
            }

        }
        */
  //  }
    /* for (let f = 0; f < aWord.length; f++) {
     }
    
    indexOf(d) === indexOf(f);
     /*
     if(d === aWord[f] ) {
         aWord.push(letter);
     }
 */

//}
