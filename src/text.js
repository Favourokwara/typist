import json from "./json/quote.json"

function stringToWords(string) { return string.split(/(?<=\s)/); }

function wordsToDomString(words) {
    return words.map(function (word) {
        let element = '';
        // append span domstring into the elements bindings
        word.split('').forEach(character => element += `<span>${character}</span>`);
        return `<p>${element}</p>`;
    })
}

export function setupText(element) {
    let quoteText;
    
    function randInt(min, max) {
        min = Math.ceil(min), max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min);
    }

    function setText(string) {
        quoteText = string;
        element.innerHTML = "";
        wordsToDomString(
            stringToWords(quoteText)).forEach(word => element.innerHTML += word);
    }
    setText(json[randInt(0, json.length - 1)].quote)
}