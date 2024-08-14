const email = "ali.tarraf@.com";
const fakeEmail = "ali.tarraf@gmailcom";

function validateEmail(email) {
  if (typeof email === "string" && email.length < 256 && email.length !== 0) {
    let atCount = 0;
    let dotAfterAt = false;
    let atIndex = -1;

    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        atCount++;
        atIndex = i;

        if (atCount > 1 || i === 0 || i === email.length - 1) {
          return false;
        }
      } else if (email[i] === ".") {
        if (atIndex !== -1) {
          dotAfterAt = true;

          if (i === atIndex + 1) {
            return false;
          }
        }

        if (i > 0 && email[i - 1] === "@") {
          return false;
        }

        const splitEmail = email.split(".");
        const emailExtension = splitEmail[splitEmail.length - 1];

        if (emailExtension.length < 2) {
          return false;
        }
      }
    }

    if (atCount !== 1 || !dotAfterAt) {
      return false;
    }

    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(validateEmail("john.doe@gmail.com"));
console.log(validateEmail("john@doe@gmail.com"));
console.log(validateEmail("john@gmail.c"));
console.log(validateEmail("john@.com"));
