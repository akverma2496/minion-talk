const btn = document.getElementById('btn');
let outputTxt = document.getElementById('output-text')

btn.addEventListener('click', translate)

function translate() {

    const inputTextElement = document.getElementById('input-text');
    const textToTranslate = inputTextElement.value;
    const inputURL = "https://api.funtranslations.com/translate/minion.json?text=" + textToTranslate;

    fetch(inputURL)
        .then(response => response.json())
        .then(data => {
            outputTxt.innerText = data.contents.translated;
        })
}

