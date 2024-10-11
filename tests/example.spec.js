// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('1st Test', async ({ page }) => {
  
expect (12).toBe (12);

});

test.skip('2nd Test', async ({ page }) => {
  
  expect (13).toBe (12);
});

test.skip('3rd Test', async ({ page }) => {
  expect (12).toBe (12);
  expect ("lars").toContain ("lars")
  
});
