let container = document.querySelector(".container");
console.log(container);
let names = ["web developer", "javascript", "student", "learner"];
let careerindex = 0;
let characterindex = 0;

function updatetext() {
  container.innerHTML = `
    <h1>I am a ${names[careerindex].slice(0, characterindex)}</h1>
  `;

  characterindex++;

  // If the entire word is displayed, move to the next word after a delay
  if (characterindex > names[careerindex].length) {
    characterindex = 0;
    careerindex = (careerindex + 1) % names.length;
  }

  setTimeout(updatetext, 200); // Change this to 200 for smooth character display
}

updatetext();
