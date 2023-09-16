const passwordBox = document.getElementById('password');
const length = 12;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const symbol = "~!@#$%^&*()_-+=/.,|\[]{}'';:<>?";
const digit = "0123456789";

const allChars = upper + lower + symbol + digit;

function createPassword() {
  let password = '';
  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += digit[Math.floor(Math.random() * digit.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand('copy');
}
