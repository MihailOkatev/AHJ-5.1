import { Button } from '../Button';

test('should open popover', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const button = new Button(container);
  button.bindToDOM();
  const mainButton = container.querySelector(Button.buttonSelector);
  mainButton.click();
  const popover = document.querySelector('.popover');
  expect(popover).toBeTruthy();
});

test('should open and close popover', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const button = new Button(container);
  button.bindToDOM();
  const mainButton = container.querySelector(Button.buttonSelector);
  mainButton.click();
  mainButton.click();
  const popover = document.querySelector('.popover');
  expect(popover).toBeNull();
});

test('tooltip position test', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const button = new Button(container);
  button.bindToDOM();
  const mainButton = container.querySelector(Button.buttonSelector);
  mainButton.click();
  const a = button.constructor.coordinates;
  console.log(a);
});
