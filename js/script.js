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


/* I Putu Wira Adi Gunawan
Khalilah Ramadhania Handoko
M Daffa Abdillah
Muhammad Adam Khairi
Muhammad Giyas Wisnu Rizqi
Nasswa Maura Syawalia
Rika Usmawati
Safira Aulia
Yati Elisa
Zulfia Fitriana 

"Project Leader: Muhammad Adam Khairi
Front End Engineer: Dean Rizqullah Ananda, Farhan Difa Chairullah, I Putu Wira Adi Gunawan, Nasswa Maura Syawalia
Deployment Team: Yati Elisa, Khalilah Ramadhania Handoko
Pitch Deck Team: M Daffa Abdillah, Safira Aulia, Rika Usmawati
Quality Assurance: Muhammad Giyas Wisnu Rizqi, Zulfia Fitriana"
*/

// Add card-member using DOM manipulation
// Define an array of member objects
var members = [
  {
    name: 'Muhammad Giyas Wisnu Rizqi',
    role: 'Quality Assurance',
    img: './img/giyas.jpg'
  },
  {
    name: 'Farhan Difa Chairullah',
    role: 'Front-End',
    img: './img/farhan.jpg'
  },
  {
    name: 'Muhammad Adam Khairi',
    role: 'Team Leader',
    img: './img/adam.png'
  },
  {
    name: 'Dean Rizqullah Ananda',
    role: 'Front-End',
    img: './img/dean.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  {
    name: '',
    role: '',
    img: '/img/adam.png'
  },
  // Add more members as needed
];

// Get the container where you want to add the members
var container = document.getElementById('members-container');

// Iterate over the members array
members.forEach(member => {
  // Create a new div element for each member
  var div = document.createElement('div');
  div.className = 'card';

  // Add the member's image
  var img = document.createElement('img');
  img.src = member.img;
  img.id = member.name.split(' ').join('-').toLowerCase();
  div.appendChild(img);

  // Add the member's name
  var h3 = document.createElement('h3');
  h3.textContent = member.name;
  div.appendChild(h3);

  // Add the member's role
  var p = document.createElement('p');
  p.textContent = member.role;
  div.appendChild(p);

  // Add the div to the container
  container.appendChild(div);
});