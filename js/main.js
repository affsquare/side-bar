  // Get all the toggle buttons and dropdown contents
  const toggleButtons = document.querySelectorAll('.dropdown-toggles');
  const dropdownContents = document.querySelectorAll('.dropdown-content');

  // Close all dropdowns except for the specified index
  function closeOtherDropdowns(exceptIndex) {
    dropdownContents.forEach((content, index) => {
      if (index !== exceptIndex) {
        content.classList.remove('active');
      }
    });
  }

  // Add click event listeners to each toggle button
  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', () => {
      // Close other open dropdowns   
        closeOtherDropdowns(index);
        // Toggle the 'active' class on the clicked dropdown content
        dropdownContents[index].classList.toggle('active');
      

    });
  });

  // Close all dropdowns when clicking outside of them
  document.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggles') && !event.target.closest('.dropdown-content')) {
      closeOtherDropdowns(-1);
    }
  });