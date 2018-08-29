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
