/*
Write a function called `myFilter` that behaves like the `Array.filter`
method.
*/

// Your code here
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

const friends = [
  {
    name: 'Albert',
    yearsOfFriendship: 3,
  },
  {
    name: 'Angela',
    yearsOfFriendship: 2,
  },
  {
    name: 'Freddy',
    yearsOfFriendship: 8,
  },
  {
    name: 'Agatha',
    yearsOfFriendship: 6,
  },
];

const filteredFriends = myFilter(friends, (friend) => {
  return friend.name[0] === 'A' && friend.yearsOfFriendship > 5;
}); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
