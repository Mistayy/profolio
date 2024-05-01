
export const appTitle = 'Wizlen';
export const restBase = 'http://localhost:8888/liwen-profolio/wp-json/wp/v2/';


// Function to reset background color to default (black)
export function resetBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  const mainNavElements = document.querySelectorAll('.main-nav');
  mainNavElements.forEach(element => {
    element.style.backgroundColor = color;
    element.classList.add('color-transition');
  });
}

export const handleSlideChange = (currentSlide) => {
  // Change background color based on the current slide index
  if (currentSlide === 0) {
      document.body.classList.add('color-transition')
      resetBackgroundColor('#4B4947');//grey
  } else if (currentSlide === 1) {
      document.body.classList.add('color-transition')
      resetBackgroundColor('#5E6C5B');//green
  } else {
      document.body.classList.add('color-transition')
      resetBackgroundColor('#E9A1B9');//pink
  }
};

