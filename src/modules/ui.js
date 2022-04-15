// This final is for generating all of the UI elements on the pages
const content = document.querySelector('#content');

for (let i = 0; i < 4; i++) {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'text';

    label.innerText = `label${i}`
    content.appendChild(label)
    content.appendChild(input)
}


//navbar
//sidebar
//main content
//footer
