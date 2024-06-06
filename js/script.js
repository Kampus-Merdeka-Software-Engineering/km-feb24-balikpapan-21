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


// Add card-member using DOM manipulation
// Define an array of member objects
let members = [
  {
    name: 'Muhammad Adam Khairi',
    role: 'Team Leader',
    img: 'adam.png',
    id: 'adam'
  },
  {
    name: 'Dean Rizqullah Ananda',
    role: 'Front-End',
    img: 'dean.jpg',
    id: 'dean'
  },
  {
    name: 'Farhan Difa Chairullah',
    role: 'Front-End',
    img: 'farhan.jpg',
    id: 'farhan'
  },
  {
    name: 'I Putu Wira Adi Gunawan',
    role: 'Front-End',
    img: 'wira.png',
    id: 'wira'
  },
  {
    name: 'Nasswa Maura Syawalia',
    role: 'Front-End',
    img: 'nasswa.png',
    id: 'nasswa'
  },
  {
    name: 'Khalilah Ramadhania Handoko',
    role: 'Deployment',
    img: 'khalilah.jpg',
    id: 'lila'
  },
  {
    name: 'Yati Elisa',
    role: 'Deployment',
    img: 'yati.jpeg',
    id: 'yati'
  },
  {
    name: 'M Daffa Abdillah',
    role: 'Pitch Deck',
    img: 'daffa.png',
    id: 'daffa'
  },
  {
    name: 'Rika Usmawati',
    role: 'Pitch Deck',
    img: 'rika.jpeg',
    id: 'rika'
  },
  {
    name: 'Safira Aulia',
    role: 'Pitch Deck',
    img: 'safira.png',
    id: 'safira'
  },
  {
    name: 'Zulfia Fitriana',
    role: 'Quality Assurance',
    img: 'zulfia.png',
    id: 'zulfia'
  },
  {
    name: 'Muhammad Giyas Wisnu Rizqi',
    role: 'Quality Assurance',
    img: 'giyas.jpg',
    id: 'giyas'
  },
  // Add more members as needed
  ];

// Get the container where you want to add the members
let container = document.querySelector('.members-container');

// Iterate over the members array
let listMembersHTML = ""
members.forEach(member => {
  listMembersHTML += `
    <div class="card" id="${member.id}">
      <img src="./img/${member.img}">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>
    `
});
container.innerHTML = listMembersHTML
console.log(listMembersHTML)