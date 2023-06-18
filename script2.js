// 1)

function chatroomStatus(users) {
    const count = users.length;
  
    if (count === 0) {
      return 'нет никого в сети';
    } else if (count === 1) {
      return `${users[0]} онлайн`;
    } else if (count === 2) {
      return `${users[0]} и ${users[1]} в сети`;
    } else {
      const remainingCount = count - 2;
      return `${users[0]}, ${users[1]} и еще ${remainingCount} в сети`;
    }
  }
  
  console.log(chatroomStatus([])); // "нет никого в сети"
  console.log(chatroomStatus(["paRIE_to"])); // "paRIE_to онлайн"
  console.log(chatroomStatus(["s234f", "mailbox2"])); // "s234f и mailbox2 в сети"
  console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bikes", "sandwichmaker833", "скрипач91"])); // "pap_ier44, townieBOY и еще 4 онлайн"

// 2)

function sayHelloBye(name, num) {
    if (num === 1) {
      return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1);
    } else {
      return 'Bye, ' + name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
  
  console.log(sayHelloBye("alon", 1)); // "Hello Alon"
  console.log(sayHelloBye("Tomi", 0)); // "Bye, Tomi"
  console.log(sayHelloBye("jose", 1)); // "Hello Jose"

// 3)

function isSymmetrical(num) {
    const str = String(num);
    const reversedStr = str.split('').reverse().join('');
  
    return str === reversedStr;
  }
  
  console.log(isSymmetrical(7227)); // true
  console.log(isSymmetrical(12567)); // false
  console.log(isSymmetrical(44444444)); // true
  console.log(isSymmetrical(9939)); // false
  console.log(isSymmetrical(1112111)); // true

// 4)

function countTrue(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countTrue([true, false, false, true, false])); // 2
  console.log(countTrue([false, false, false, false])); // 0
  console.log(countTrue([])); // 0

// 5)

function formatPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6, 10).join('');
  
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
  console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // (519) 555-4468
  console.log(formatPhoneNumber([3, 4, 5, 5, 1, 2, 5, 2, 7])); // (345) 512-5272
  