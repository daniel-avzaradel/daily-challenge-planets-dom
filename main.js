let solarSystem = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const mercury = document.createElement('div')
mercury.classList.add('planet', 'mercury');
mercury.style.backgroundColor = "brown";

const venus = document.createElement('div')
venus.classList.add('planet', 'venus')
venus.style.backgroundColor = "cornflowerBlue"

const earth = document.createElement('div')
earth.classList.add('planet', 'earth')
earth.style.backgroundColor = "dodgerBlue"

const mars = document.createElement('div')
mars.classList.add('planet', 'mars')
mars.style.backgroundColor = "Firebrick"

const jupiter = document.createElement('div')
jupiter.classList.add('planet', 'jupiter')
jupiter.style.backgroundColor = "FloralWhite"

const saturn = document.createElement('div')
saturn.classList.add('planet', 'saturn')
saturn.style.backgroundColor = "Khaki"

const uranus = document.createElement('div')
uranus.classList.add('planet', 'uranus')
uranus.style.backgroundColor = "lightcyan"

const neptune = document.createElement('div')
neptune.classList.add('planet', 'neptune')
neptune.style.backgroundColor = "mediumslateblue"

const section = document.querySelector('.listPlanets')
section.append(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune)