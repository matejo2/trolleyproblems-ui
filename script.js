window.addEventListener('load', () => {
    // no more alerts
   // alert('dfjsdkfkjsldjfldsj');
})


function showImgage() {
    console.log('add image...');
    let img = document.createElement('img');
    img.src = 'img/iu.jpeg'
    img.width = 300;
    img.height = 200;
    img.alt = "img 1"

    document.querySelector('#image1').appendChild(img);
}

function createList() {
    console.log('i am log')
    const wizards = ['Hermione', 'Harry', 'Bibi', 'Dumbledore', 'Radagast', 'ghjjh'];
    let list = document.createElement('ul');

    wizards.forEach(function (wizard) {
        console.log('wizards')
        let li = document.createElement('li');
        li.textContent = wizard;
        list.appendChild(li);
    })
    let app = document.querySelector('#app');
    app.appendChild(list)
    console.log('done')
}
