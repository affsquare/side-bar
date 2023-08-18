
document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll(".dropdown-container");

  containers.forEach(container => {
    const button = container.querySelector(".dropdown-button");
    const buttonDots = container.querySelector(".dropdown-button-dots");

    const dropdownContent = container.querySelector(".dropdown-content");
    const dropdownContent2 = container.querySelector(".dropdown-content2");


    button.addEventListener("click", function(event) {
      event.stopPropagation();
      closeOtherDropdowns(container);
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      dropdownContent2.style.display =  dropdownContent.style.display === "block" ? "none" : "";

    });

    buttonDots.addEventListener("click", function(event) {
      event.stopPropagation();
      closeOtherDropdowns(container);
      dropdownContent2.style.display = dropdownContent2.style.display === "block" ? "none" : "block";
      dropdownContent.style.display =  dropdownContent2.style.display === "block" ? "none" : "";

    });
  });

  document.addEventListener("click", function(event) {
    closeAllDropdowns();
  });

  function closeOtherDropdowns(currentContainer) {
    containers.forEach(container => {
      if (container !== currentContainer) {
        const dropdownContent = container.querySelector(".dropdown-content");
        const dropdownContent2 = container.querySelector(".dropdown-content2");

        dropdownContent.style.display = "none";
        dropdownContent2.style.display = "none";

      }
    });
  }

  function closeAllDropdowns() {
    const allDropdowns = document.querySelectorAll(".dropdown-content");
    const allDropdowns2 = document.querySelectorAll(".dropdown-content2");

    allDropdowns.forEach(dropdown => {
      dropdown.style.display = "none";
    });
    allDropdowns2.forEach(dropdown => {
      dropdown.style.display = "none";
    });
  }
});