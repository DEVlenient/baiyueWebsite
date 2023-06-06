document.addEventListener('DOMContentLoaded', function() {
  const terms = document.querySelectorAll('.term');

  terms.forEach((term) => {
    term.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.querySelector('.term-content');
      if (this.classList.contains('active')) {
        content.style.display = 'block';
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
      } else {
        content.style.maxHeight = '0';
        setTimeout(() => {
          content.style.display = 'none';
        }, 300);
      }
    });
  });
});