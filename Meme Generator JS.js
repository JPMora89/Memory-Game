let img = document.getElementsByTagName('img');
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let newMeme = document.createElement('div');
    let topText = document.createElement('div');
    let bottomText = document.createElement('div');
    let img = document.createElement('img');
    let button = document.createElement('button');

    img.src = document.getElementById('url').value;
    topText.innerHTML = document.getElementById('topText').value;
    topText.classList.add('textOnTop')
    bottomText.innerHTML = document.getElementById('bottomText').value; 
    bottomText.classList.add('textOnBottom')
    button.innerText = 'Delete';
    button.classList.add('button');

    newMeme.classList.add('newMeme');
    newMeme.appendChild(topText);
    newMeme.appendChild(bottomText);
    newMeme.appendChild(img);
    newMeme.appendChild(button);

    form.reset();

    let memeContainer = document.getElementById('container');
    memeContainer.appendChild(newMeme);

    document.getElementById('url').value = '';
    document.getElementById('topText').value = '';
    document.getElementById('bottomText').value = '';

    button.addEventListener('click', function(e) {
        newMeme.remove();
    })


});