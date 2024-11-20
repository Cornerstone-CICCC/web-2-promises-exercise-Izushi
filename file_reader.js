const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName, lastName, age, hobbies;
fs.readFile("firstname.txt", "utf-8")
  .then((data) => {
    firstName = data;
    return fs.readFile("lastname.txt", "utf-8");
  })
  .then((data) => {
    lastName = data;
    return fs.readFile("age.txt", "utf-8");
  })
  .then((data) => {
    age = data;
    return fs.readFile("hobbies.txt", "utf-8");
  })
  .then((data) => {
    hobbies = data;
    const modifiedHobbies = hobbies.replace(/[\[\]"]/g, '');
    const hobbyArr = modifiedHobbies.split(",");
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbyArr[0]} and ${hobbyArr[1]}`);
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
  try {
    const firstName = await fs.readFile("firstname.txt", "utf-8");
    const lastName = await fs.readFile("lastname.txt", "utf-8");
    const age = await fs.readFile("age.txt", "utf-8");
    const hobbies = await fs.readFile("hobbies.txt", "utf-8");
    const modifiedHobbies = hobbies.replace(/[\[\]"]/g, '');
    const hobbyArr = modifiedHobbies.split(",");
    return `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbyArr[0]} and ${hobbyArr[1]}`;
  } catch (err) {
    return err;
  }
}

readFiles()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));