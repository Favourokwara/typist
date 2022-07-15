import quotes from "./json/quote.json"

function toWords(sentence) { return sentence.split(/(?<=\s)/); }


function quoteSplit(quote) {
    const sentence = toWords(quote);

    return sentence.map(word => {
        let element = "";

        // add span version of each character into the element node.
        word.split('').forEach(char => element += `<span>${char}</span>`);
        return `<p>${element}</p>`;
    })
}

// // /**
// //  * Split a string into substrings using the lenght of items in the specified
// //  * reference array and return them as an array.
// //  */
// // function referenceSplit(reference, value) {
// //     const result = [];

// //     for (let i = 0; i < reference.length && value; i++) {
// //         // push a piece of the string to the result array
// //         result.push(value.substr(0, reference[i].length))

// //         value = value.substr(reference[i].length)
// //     }
    
// //     return result;
// // }
// const randInt = (min, max) => Math.floor(
//     Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));

function randInt(min, max) {
    max = Math.floor(max)
    min = Math.ceil(min)
    return Math.floor(Math.random() * (max - min) + min);
}

export function setupText(element) {
    let text;

    function setText(quoteText) {
        text = quoteText;
        element.innerHTML = "";
        quoteSplit(quoteText).forEach(word => element.innerHTML += word)
    }
    setText(quotes[randInt(0, quotes.length - 1)].quote)
}