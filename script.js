
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString(`Desenvolvedor <span style="color: #7c3aed">Web FullStack</span> Node.js`)
  .pauseFor(1500)
  .deleteAll()
  .typeString('Olá, tudo bem?')
  .pauseFor(1000)
  .start();

function dateBirthday() {
  const elementsSpans = document.getElementsByClassName("age");

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const dateYearBirth = 2003;
  const dateMonthBirth = 7;
  let myAge = 0;

  if (currentMonth >= dateMonthBirth) {
    myAge = currentYear - dateYearBirth;
  } else {
    myAge = (currentYear - dateYearBirth) - 1;
  }

  for (i = 0; i < elementsSpans.length; i++) {
    elementsSpans[i].innerText = myAge;
  }

  // manter data do copyright atualizada
  document.getElementById("footerCurrentYear").innerText = currentYear;
}

dateBirthday();