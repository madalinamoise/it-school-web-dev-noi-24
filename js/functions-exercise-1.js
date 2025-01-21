const user1Email = 'aaaa@ssss.com';
const user2Email = 'jbfhhh@example.com';
const user3Email = 'invalid-email.com';

// if (user1Email.includes('@')) {
//   console.log(`${user1Email} is a valid email.`);
// } else {
//   console.log(`${user1Email} is not a valid email.`);
// }

function validator(email, criteria) {
  if (email.includes(criteria)) {
    console.log(`${email} includes ${criteria}`);
  } else {
    console.log(`${email} does not includes ${criteria}`);
  }
}

const validatorSymbol = '#';
validator(user1Email, validatorSymbol);
validator(user2Email, validatorSymbol);
validator(user3Email, validatorSymbol);

const emails = ['aaaa@ssss.com', 'jbfhhh@example.com', 'invalid-email.com'];
for (let index = 0; index < emails.length; index++) {
  validator(emails[index], validatorSymbol);
}
