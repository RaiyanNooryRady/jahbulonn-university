//  University object
const jahuniUniversityList = [
  {
    name: "The University of Split",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/university-of-split/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_7.png",
  },
  {
    name: "Karlsuniversität Prag",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/charles-university-prague/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_3.png",
  },
  {
    name: "Pomeranian Medical University",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/pomeranian-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_8.png",
  },
  {
    name: "AFMKU",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/andrzej-frycz-modrzewskiuniversity/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_9.png",
  },
  {
    name: "Humanitas University",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/humanitas-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_6.png",
  },
  {
    name: "Stradins University Riga",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/stradins-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_14.png",
  },
  {
    name: "MU Cluj-Napoca",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/cluj-napoca-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_11.png",
  },
  {
    name: "MU Victor Babes",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/victor-babes-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_10.png",
  },
  {
    name: 'UNI Bukarest "Carol Davila"',
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/carol-davila-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_12.png",
  },
  {
    name: "Medical University of Varna",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/university-of-varna/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_13.png",
  },
  {
    name: "Comenius University",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/comenius-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_1-1.png",
  },
  {
    name: "Jessenius University",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/jessenius-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_2.png",
  },
  {
    name: "Semmelweis Universität",
    slug: "https://jahbulonn.mdazizurrahman.online/universities-/semmelweis-university/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_4.png",
  },
  {
    name: "MU Pecs",
    slug: "hhttps://jahbulonn.mdazizurrahman.online/universities-/university-of-pecs/",
    image:
      "https://jahbulonn.mdazizurrahman.online/wp-content/uploads/2025/04/Screenshot_5.png",
  },
];

// alert(jahuniUniversityList[0].id);

//End university object
const jahuniNumberOfUniversities = 14;
const jahuniRadius = 40; // % of the container
const jahuniContainer = document.querySelector(".jahuni-compass-container");

for (let i = 0; i < jahuniNumberOfUniversities; i++) {
  const jahuniAngle = (i / jahuniNumberOfUniversities) * 2 * Math.PI;
  const jahuniX = 50 + jahuniRadius * Math.cos(jahuniAngle);
  const jahuniY = 50 + jahuniRadius * Math.sin(jahuniAngle);

  const jahuniDiv = document.createElement("div");
  jahuniDiv.className = "jahuni-university";
  jahuniDiv.style.left = `${jahuniX}%`;
  jahuniDiv.style.top = `${jahuniY}%`;
  jahuniDiv.style.transform = "translate(-50%, -50%)";

  jahuniDiv.innerHTML = `<a href="${jahuniUniversityList[i].slug}"><img src="${
    jahuniUniversityList[i].image
  }" alt="University ${i + 1}" /></a>`;

  jahuniDiv.onmouseover = () => {
    const compass = document.querySelector(".jahuni-compass-container");
    const compassRect = compass.getBoundingClientRect();
    const uniRect = jahuniDiv.getBoundingClientRect();

    const compassCenterX = compassRect.left + compassRect.width / 2;
    const compassCenterY = compassRect.top + compassRect.height / 2;

    const uniCenterX = uniRect.left + uniRect.width / 2;
    const uniCenterY = uniRect.top + uniRect.height / 2;

    const angleRad = Math.atan2(
      uniCenterY - compassCenterY,
      uniCenterX - compassCenterX
    );
    const angleDeg = angleRad * (170 / Math.PI) - 40;

    document.querySelector(
      "#jahuni-compass-img"
    ).style.transform = `rotate(${angleDeg}deg)`;
  };

  jahuniContainer.appendChild(jahuniDiv);
}
