document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.footer-text').innerHTML = `Tarik Topić &copy ${new Date().getFullYear()}`;
})

function payAndWatch(element) {
    let button = element; //varijabli button dodan argument element a u html-u dodan this tako da se zna koji se button klika
    let buttonArea = button.closest('#buttonArea'); //button trazi najblizi element sa atributom #buttonArea
    
    let removeButton = document.createElement('button');
    removeButton.classList = 'btn btn-danger';
    removeButton.innerText = 'Empty the cart';
    removeButton.setAttribute('id', 'remove');
    removeButton.setAttribute('onclick','remove(this)');

    let info = document.createElement('h6');
    info.classList = 'text-danger';
    info.innerText = 'In the cart';
    info.setAttribute('id','info');

    buttonArea.appendChild(info);
    buttonArea.appendChild(removeButton);
    
    button.setAttribute('disabled', 'true');

}

function remove(element) {
    let button = element;
    let info = document.querySelector('#info');
    let payButton = document.querySelector('.btn-warning');


    if(payButton.hasAttribute('disabled')) {
        payButton.removeAttribute('disabled');
    }

let movie = document.querySelectorAll('.movie-item');
movie.forEach(function(element) {
    console.log(movie);
});

    info.remove();
    button.remove();
}
