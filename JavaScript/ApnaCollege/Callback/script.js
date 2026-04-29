// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("Some error occurred");
// });

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("data", dataId);
      //   resolve("success");
      reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

// function getData(dataId, getNextData) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("Getting data2..........");
//   getData(2, () => {
//     console.log("Getting data3..........");
//     getData(3, () => {
//       console.log("Getting data4..........");
//       getData(4);
//     });
//   });
// });
