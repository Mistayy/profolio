
export const appTitle = 'Wizlen';
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
