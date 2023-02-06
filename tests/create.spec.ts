import { test, expect } from '@playwright/test';

test('Create an email address', async ({ page }) => {
  // Navigate to gmail registration page
  await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp');

  // Fill in the form
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');

  // Do a request to get a random word
  const response = await page.evaluate(async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    const data = await response.json();
    return data[0];
  });

  // Fill in the username field with the random word
  await page.fill('#username', `${response}${generateRandomNumber()}`);

  const password = `${response}${generateRandomNumber()}`;

  // Fill in the password field (input with the name Passwd)
  await page.fill('[name="Passwd"]', password);
  await page.fill('[name="ConfirmPasswd"]', password);

  // Click on the display password checkbox
  await page.click('#selectioni1');

  // Pause the test to see what's happening
  await page.pause();

  // Click the next button
  await page.click('#accountDetailsNext');

});

// Generate a random number between 0 and 1000000000
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000000);
}

