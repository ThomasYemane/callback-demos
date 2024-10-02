/*
Write a function called `myEvery` that behaves like the `Array.every`
method.
*/

// Your code here
function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
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

const allFriendsStartWithA = myEvery(friends, (friend) => {
  return friend.name.startsWith('A');
}); // false

const allFriendsUnder10Years = myEvery(friends, (friend) => {
  return friend.yearsOfFriendship < 10;
}); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
