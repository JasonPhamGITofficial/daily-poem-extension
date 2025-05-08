//TESTING
// const poems = [
//     "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both...",
//     "Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate...",
//     "Hope is the thing with feathers\nThat perches in the soul..."
// ]

// const today = new Date();
// const index = today.getDate() % poems.length;
// document.getElementById('poem').textContent = poems[index];

fetch('https://www.poemist.com/api/v1/randompoems')
    .then(response => response.json())
    .then(data => {
        const poem = data[0];
        document.getElementById('poem').textContent = `${poem.title}\nby ${poem.poet.name}\n\n${poem.content}`;
    })
    .catch(error => {
        document.getElementById('poem').textContent = 'Failed to load poem.';
    });