const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f05", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


// Return the name of the individual who follows the most people.
function biggestFollower(data) {
  let biggest;
  for (let user in data) {
    if (!biggest) {
      biggest = data[user]
    } else if (data[user].follows.length > biggest.follows.length) {
      biggest = data[user]
    }
  }

  console.log('Biggest Follower: ', biggest.name)
  return biggest.name;
}

biggestFollower(data)


// Return the name of the most popular (most followed) individual.
function mostPopular(data) {
  const usersFollowCount = {};

  for (let user in data) {
    const following = data[user].follows
    
    following.forEach(account => {
      const username = data[account].name

      if (!usersFollowCount[username]) {
        usersFollowCount[username] = 1
      } else {
        usersFollowCount[username] += 1
      }
    })
  }

  const counts = Object.values(usersFollowCount);
  const max = Math.max(...counts);
  let userName = '';

  for (let user in usersFollowCount){
    if (usersFollowCount[user] === max)
    {
      userName = user;
    }
  }

  console.log('Most Popular: ', userName);
  return userName;
}

mostPopular(data)

// Output a list of everyone and for each of them, the names of who they follow and who follows them.
function printAll(data) {
  const result = {}
  for (let user in data) {
    result[user] = {id: user, name: data[user].name}
  }
  
  for (let user in result) {
    result[user].follows = data[user].follows.map(account => {
      // for each account that this user follows, add this user to their followedBy
      if (!result[account].followedBy) {
        result[account].followedBy = [];
      }
      result[account].followedBy.push(result[user].name)
      return data[account].name
    })
  }

  return result;
}

console.log('List All: \n', printAll(data));


// Return a list of names for those who follow someone that doesn't follow them back.
function unrequitedFollowers(data) {
  const result = [];

  for (let user in data) {
    if (data[user].follows.length !== data[user].followedBy.length) {
      result.push(data[user].name);
    }
  }
  console.log('Unrequited Followers: \n', result);
}

unrequitedFollowers(printAll(data))