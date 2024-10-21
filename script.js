const input = document.getElementById('input');
const allBtns = document.querySelectorAll('button');

allBtns.forEach(singleBtn => {
    singleBtn.addEventListener('click', (btnObj) => {
        console.log(btnObj.target.textContent);
        if(btnObj.target.textContent === 'C') {
            input.innerText = "";
        } else if((btnObj.target.textContent === 'Del')) {
            input.innerText = input.innerText.slice(0, -1);
        } else if(btnObj.target.textContent === '=') {
            input.innerText = eval(input.innerText);
        }
        else {
            input.innerText += btnObj.target.textContent;
        }
        input.scrollLeft = input.scrollWidth;
    });
})