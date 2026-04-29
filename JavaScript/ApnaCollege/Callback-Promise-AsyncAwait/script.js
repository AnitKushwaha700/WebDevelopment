// ============================================
// Practical File: Callbacks, Promises, Async/Await
// ============================================

// --------------------------------------------
// 1. CALLBACK EXAMPLE
// --------------------------------------------

console.log("---- CALLBACK EXAMPLE ----");

function getDataCallback(dataId, nextData) {
  setTimeout(() => {
    console.log("Data:", dataId);
    if (nextData) {
      nextData();
    }
  }, 1000);
}

// Callback Hell Example
getDataCallback(1, () => {
  getDataCallback(2, () => {
    getDataCallback(3, () => {
      console.log("All data fetched using Callbacks");
    });
  });
});


// --------------------------------------------
// 2. PROMISE EXAMPLE
// --------------------------------------------

console.log("---- PROMISE EXAMPLE ----");

function getDataPromise(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("Success");
      // reject("Error"); // Uncomment to test error
    }, 1000);
  });
}

// Promise Chaining
getDataPromise(1)
  .then(() => {
    return getDataPromise(2);
  })
  .then(() => {
    return getDataPromise(3);
  })
  .then(() => {
    console.log("All data fetched using Promises");
  })
  .catch((err) => {
    console.log("Error:", err);
  });


// --------------------------------------------
// 3. ASYNC / AWAIT EXAMPLE
// --------------------------------------------

console.log("---- ASYNC/AWAIT EXAMPLE ----");

function getDataAsync(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("Done");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    await getDataAsync(1);
    await getDataAsync(2);
    await getDataAsync(3);
    console.log("All data fetched using Async/Await");
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchAllData();


// --------------------------------------------
// 4. REAL WORLD EXAMPLE (API FETCH)
// --------------------------------------------

console.log("---- REAL API EXAMPLE ----");

async function fetchUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.log("API Error:", error);
  }
}

fetchUserData();


// ============================================
// END OF FILE
// ============================================