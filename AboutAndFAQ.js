// Handle tab switching
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => panel.style.display = 'none');

    // Add active to clicked tab
    button.classList.add('active');
    const tabToShow = button.getAttribute('data-tab');
    document.getElementById(tabToShow).style.display = 'block';
  });
});

// Handle accordion behavior
const accordionButtons = document.querySelectorAll('.accordion button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    
    // Collapse all items
    accordionButtons.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Expand current if it was collapsed
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      const content = button.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
