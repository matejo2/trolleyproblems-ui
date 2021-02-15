window.addEventListener('load', () => {
    // no more alerts
   // alert('dfjsdkfkjsldjfldsj');
})

function createList() {
    console.log('i am log')
    const wizards = ['Hermione', 'Harry', 'Bibi', 'Dumbledore', 'Radagast'];
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
