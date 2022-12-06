
const adviceIdElement = document.querySelector('.advice-id span');
const adviceReceiverElement = document.querySelector('.advice-receiver');
const generatorButton = document.querySelector('.button-background');

const getAdvice = async () => {
    try {
        fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
        .then((response) => response.json())
        .then((json) => changeElements(json));
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
}

function changeElements(json) {
    const advice = json.slip;
    
    adviceIdElement.innerHTML = `#${advice.id}`;
    adviceReceiverElement.innerHTML = `"${advice.advice}"`;
}

generatorButton.addEventListener("click", getAdvice);
