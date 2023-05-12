const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector('#btn');

const handleClick = () => {
    console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
    btn.addEventListener('click', handleClick);
    console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
    btn.removeEventListener('click', handleClick);
    console.log('click event listener was removed from btn');
});

//-------------------------------------------------------------------------------------------------------------

document.addEventListener('keydown', event => {
    event.preventDefault();

    // console.log('event: ', event.type);
    // console.log('key: ', event.key);
    // console.log('code: ', event.code);

    if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
        console.log('«Ctrl + s» or «Command + s» combo');
    }
});

//-------------------------------------------------------------------------------------------------------------
