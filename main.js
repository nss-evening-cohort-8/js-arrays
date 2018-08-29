const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimals = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimals.split(','); //['cow', 'bear', 'dog', 'cat']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('newNum', newNum);

// mini challengew
const palChecker = (word) => {
  const reverseArray = word.split('').reverse().join('');
  if(word === reverseArray){
    console.log(`${word} IS a palindrome`);
  } else {
    console.log(`${word} NOT a palindrome`);
  }
};

palChecker('mom');  //yes
palChecker('monkeybutt'); //no
palChecker('racecar'); //yes

let animals = ['spiders', 'snakes', 'gophers', 'big spiders'];

const lastItem = animals.pop(); // big spiders
const firstItem = animals.shift(); //spiders
animals.push('bat');
animals.unshift('baby hippo');
console.log('animals', animals);  // ['baby hippo', 'snakes', 'gophers', 'bats']


// 1. what is your starting value  - 0
// 2.  what is your stopping value - something.length
// 3. how are you incrementing - +1

for(let i = 0; i < animals.length; i++){
  // do something here
  console.log(animals[i]);
}