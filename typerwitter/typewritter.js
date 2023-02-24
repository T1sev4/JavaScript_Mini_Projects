let words = [
    'Hello',// 0
    'world' // 1
];
let outer = document.querySelector('.outer');

let charTurn = 0;
let wordTurn = 0;

printWord();

function printWord(){
    if(words[wordTurn].length >= charTurn){
        let str = words[wordTurn].substring(0, charTurn);
        outer.innerHTML = `${str} <span>|</span>`;
        charTurn++;
        setTimeout(printWord, 200);
    }
    else{
        deleteWord();
    }
}

function deleteWord(){
    if(charTurn >= 0){
        let str = words[wordTurn].substring(0, charTurn);
        outer.innerHTML = `${str} <span>|</span>`;
        charTurn--;
        setTimeout(deleteWord, 200);
    }
    else{
        if(wordTurn < words.length - 1){
            wordTurn++;
        }else{
            wordTurn = 0;
        }
        printWord();
    }
}