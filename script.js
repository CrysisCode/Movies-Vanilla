document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.footer-text').innerHTML = `Tarik Topić &copy ${new Date().getFullYear()}`;
})

function payAndWatch(element) {
    let button = element; //varijabli button dodan argument element a u html-u dodan this tako da se zna koji se button klika
    let buttonArea = button.closest('#buttonArea'); //button trazi najblizi element sa atributom #buttonArea
    
    let elContainer = document.createElement('div');
    elContainer.classList = 'd-flex align-items-baseline justify-content-between';
    elContainer.setAttribute('id', 'elContainer');

    let removeButton = document.createElement('button');
    removeButton.classList = 'btn btn-danger';
    removeButton.innerText = 'Empty the cart';
    removeButton.setAttribute('id', 'remove');
    removeButton.setAttribute('onclick','remove(this)');

    let info = document.createElement('h6');
    info.classList = 'text-danger';
    info.innerText = 'In the cart';
    info.setAttribute('id','info');

    buttonArea.appendChild(elContainer)
    elContainer.appendChild(info);
    elContainer.appendChild(removeButton);
    
    button.setAttribute('disabled', 'true');
}

function remove(element) {
    let mainEl = element.closest('#elContainer');
    mainEl.remove();  
    console.log(mainEl);
}

function removeDisabled(element){
    let button = element;
    buttonArea = element.closest('#buttonArea');
    if(button.hasAttribute('disabled')){
        button.removeAttribute('disabled');
    }
}
    
