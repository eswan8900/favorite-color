const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let favoriteColor;

mySubmit.onclick = function(){
    favoriteColor = myText.value;
    if (favoriteColor === 'red' || favoriteColor === 'Red'){
        resultElement.textContent = `You are cool!`
    } 
    else if (favoriteColor === 'orange'|| favoriteColor === 'Orange'){
        resultElement.textContent = `You are smart!`
    }
    else if (favoriteColor === 'yellow' || favoriteColor === 'Yellow'){
        resultElement.textContent = `You are fun!`
    }
    else if (favoriteColor === 'green' || favoriteColor === 'Green'){
        resultElement.textContent = `You are strong!`
    }
    else if (favoriteColor === 'blue' || favoriteColor === 'Blue'){
        resultElement.textContent = `You are awesome!`
    }
    else if (favoriteColor === 'purple' || favoriteColor === 'Purple'){
        resultElement.textContent = `You are special!`
    }
    else if (favoriteColor === 'pink' || favoriteColor === 'Pink' ){
        resultElement.textContent = `You are amazing!`
    }
    else if (favoriteColor === ''){
        resultElement.textContent = `Please choose a color.`
    }
    else{
        resultElement.textContent = `Please choose a color from the rainbow.`
    }
}