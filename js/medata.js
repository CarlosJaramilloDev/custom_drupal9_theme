window.addEventListener('load', function () {
  let hrs = document.querySelectorAll('hr.separator, hr.contact-separator');
  hrs.forEach((hr) => {
    const brother = hr.previousElementSibling;
    const syle = getComputedStyle(brother);
    hr.style.setProperty('--hrsize', syle.width);
  });
}, false);