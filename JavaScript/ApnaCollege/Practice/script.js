function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`✅ ${num} is Even`);
      } else {
        reject(`❌ ${num} is Odd`);
      }
    }, 2000);
  });
}

checkNumber(8)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });