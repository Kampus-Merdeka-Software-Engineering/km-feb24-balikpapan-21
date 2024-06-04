document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.sidebar .menu-item');

  // Function to remove active class from all menu items
  function removeActiveClasses() {
      menuItems.forEach(item => {
          item.classList.remove('active');
      });
  }

  // Add click event listener to each menu item
  menuItems.forEach(item => {
      item.addEventListener('click', function () {
          removeActiveClasses();
          this.classList.add('active');
      });
  });

  // Set active class based on current URL
  const currentPath = window.location.pathname;
  menuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
          item.classList.add('active');
      }
  });
});
