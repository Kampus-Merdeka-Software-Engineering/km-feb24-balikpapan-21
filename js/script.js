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

// Define an array of member objects
let members = [
  { name: 'Muhammad Adam Khairi', role: 'Ketua Kelompok', img: 'path/to/ketua.jpg' },
  { name: 'Nama Anggota 1', role: 'Peran Anggota 1', img: 'path/to/foto1.jpg' },
  { name: 'Nama Anggota 2', role: 'Peran Anggota 2', img: 'path/to/foto2.jpg' },
  // Add more members as needed
];

// Get the container where you want to add the members
let container = document.querySelector('.member-card');

// Iterate over the members array
members.forEach(member => {
  // Create a new div element for each member
  let div = document.createElement('div');
  div.className = 'card';

  // Add the member's image
  let img = document.createElement('img');
  img.src = member.img;
  img.alt = member.name;
  div.appendChild(img);

  // Add the member's name
  let h3 = document.createElement('h3');
  h3.textContent = member.name;
  div.appendChild(h3);

  // Add the member's role
  let p = document.createElement('p');
  p.textContent = member.role;
  div.appendChild(p);

  // Add the div to the container
  container.appendChild(div);
});