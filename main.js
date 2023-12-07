const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const openIcon = question.querySelector('.open');
  const closeIcon = question.querySelector('.close');
  const answer = faq.querySelector('.answer');

  question.addEventListener('click', () => {
    faq.classList.toggle('active');
    
    if (faq.classList.contains('active')) {
      openIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
      answer.style.maxHeight = '300px'; // Adjust the max-height value as needed
    } else {
      openIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
      answer.style.maxHeight = '0';
    }
  });
});
