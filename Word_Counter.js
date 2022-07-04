//4. Write a function with the following signature: countWords(text) {…}
// This function must return the number of words in a given sentence.

let somesentence = "  We should use a while loop to solve the problem     ";

function countWords(text) {
    text = text.trim();
    let counter = 0;

    for(let i = 0; i < text.length; i++){
        if(text.charAt(i) === " "){
            counter++
        }
    }
        return console.log(counter + 1);
}

countWords(somesentence);


