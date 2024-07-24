const createSquareDivs = function (quantity) {
    for (let i = 0; i < (quantity * quantity); i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        const parentDiv = document.querySelector('.container');
        parentDiv.appendChild(childDiv);
        let ratioDiv = 100/quantity;
        childDiv.style.height = ratioDiv + '%';
        childDiv.style.width = ratioDiv + '%';

    }
   

}

const userDivs = function () {
    const parentDiv = document.querySelector('.container');
    let userNumber = parseInt(prompt("How many Divs would you like on each direction?"));
    if (userNumber < 100) {
        parentDiv.replaceChildren();
        createSquareDivs(userNumber);
    } else {
        alert("Try Again")
        userDivs();
    }
    
}

createSquareDivs(16);

const btn = document.querySelector('.button');
btn.addEventListener('click', userDivs);



