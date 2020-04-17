const passLength = 4;
const passItems = [];
const dataFile = 'words';
const dataSource = '../data/words2.json';
const getDataF = () =>
  fetch(dataSource)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < passLength; i++) {
        passItems.push(data[Math.floor(Math.random() * data.length)]);
      }
    });
console.log(passItems);
