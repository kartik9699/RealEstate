$('.carousel').carousel({
    interval: 2000
  });
  
function scrollToProperty(propertyType) {
    const element = document.getElementById(propertyType);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

