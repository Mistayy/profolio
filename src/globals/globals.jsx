
export const appTitle = 'Wizlen';
export const restBase = 'http://localhost:8888/liwen-profolio/wp-json/wp/v2/';
export const handleSlideChange = (currentSlide) => {
  // Change background color based on the current slide index
  if (currentSlide === 0) {
      document.body.classList.add('color-transition')
      document.body.style.backgroundColor = '#4B4947';
  } else if (currentSlide === 1) {
      document.body.classList.add('color-transition')
      document.body.style.backgroundColor = '#ECA3C7';
  } else {
      document.body.classList.add('color-transition')
      document.body.style.backgroundColor = 'rgb(255, 170, 0)';
  }
};

// Function to reset background color to default (black)
export function resetBackgroundColor() {
  document.body.style.backgroundColor = '#4B4947';
}
