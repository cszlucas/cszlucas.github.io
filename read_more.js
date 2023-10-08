const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display mobile menu
//function below
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more-button');
    const additionalText = document.querySelector('.hidden');
    const slidingPic = document.querySelector('.hiddenPic');

    slidingPic.style.display='none';

    readMoreButton.addEventListener('click', function() {
        if (additionalText.style.display === 'none') {//if text hidded
            additionalText.style.display = 'block'; //show text
            slidingPic.style.display='block';
            readMoreButton.innerHTML = '<img src="images/More info Button.png" alt="Read Lesser" style="transform: rotate(180deg);">';
            } else { //if already shown
            additionalText.style.display = 'none';
            slidingPic.style.display='none';
            readMoreButton.innerHTML = '<img src="images/More info Button.png" alt="Read Morer">';
        }
    });
});

// const readMoreButton = document.querySelector('.read-more-button');
// const additionalText = document.querySelector('.hidden');
// const slidingPic = document.querySelector('.hiddenPic');

// let isContentVisible = true;

// readMoreButton.addEventListener('click', function() {
//   if (isContentVisible) { //if content visible
//     additionalText.style.display = 'block';
//     readMoreButton.innerHTML = '<img src="images/More info Button.png" alt="Read Lesser" style="transform: rotate(180deg);">';
//     slidingPic.style.display = 'block';
//     setTimeout(function() {
//       slidingPic.style.right = '0'; // Slide in the image from the right
//     }, 100); // Add a small delay to start the sliding animation
//   } else { //content not visible
//     additionalText.style.display = 'none';
//     readMoreButton.innerHTML = '<img src="images/More info Button.png" alt="Read Morer">';
//     slidingPic.style.right = '-100%'; // Slide the image back to the left
//     setTimeout(function() {
//       slidingPic.style.display = 'none'; // Hide the additional content after the animation
//     }, 500); // Adjust the timeout to match the animation duration
//   }

//   isContentVisible = !isContentVisible;
// });
// });
