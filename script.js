const createSquareDivs = function (quantity) {
    for (let i = 0; i < (quantity * quantity); i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        const parentDiv = document.querySelector('.container');
        parentDiv.appendChild(childDiv);
    }
   

}

createSquareDivs(5)
