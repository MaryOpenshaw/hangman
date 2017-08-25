
let guessLetter = '';

function get() {
    let get = window.open('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt');
    console.log(get);

}
function search1(callback) {
    let url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let responseData = this.responseText.split('\n');
            let size = responseData.length;
            console.log(size);
            global = responseData[parseInt(Math.random() * size)];
            callback(global);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
    ;
}

function game() {
    //console.log(guessLetter);
    search1(print);
    counter = 0;
    counter1 = 0;
    counter2 = 7;
    let letter = document.getElementById('letter').value;
    console.log(letter);
    // console.log(guessLetter);
    // let a = guessLetter.charAt(0);
    // let arr = guessLetter;

    for (let i = 0; i < guessLetter.length; i++) {
        console.log(guessLetter.charAt(i));
    }


    //let g = guessLetter.length;




    //cosnole.log(guessLetter.charAt(0));
    /*
        for (let i = 0; i < g; i++) {
            console.log(g[i].charAt(0));
            /*
            if (i === letter) {
                counter++;
                counsole.log(counter);
                console.log(g);
            }
            else if (i !== letter) {
                counter1++;
                console.log(counter1);
            }
            if (counter2 ! === 0){
            counter2--;
            console.log(counter2); 
        }
    }*/


}

function print(x) {
    console.log(x);
    guessLetter = x;
} 