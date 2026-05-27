async function login() {

  try {

    const username = prompt("Enter Username");

    // Validation
    if (username === "") {
      throw new Error("Username Cannot Be Empty");
    }

    // Fake Server Delay
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    // Username Check
    if (username !== "aniket") {
      throw new Error("Invalid Username");
    }

    // Success
    console.log("Login Successful");

  } catch (e) {

    console.log("Error :", e.message);

  } finally {

    console.log("Login Process Finished");

  }

}

login();