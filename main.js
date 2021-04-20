let solarSystem = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

const section = document.querySelector('.listPlanets')

for (i=0; i < solarSystem.length; i++) {
    let div = document.createElement('div');
    div.classList.add('planet', solarSystem[i])
    section.append(div)
    console.log(div)
}

let mercury = document.querySelector('.mercury');
let venus = document.querySelector('.venus');
let earth = document.querySelector('.earth');
let mars = document.querySelector('.mars');
let jupiter = document.querySelector('.jupiter');
let saturn = document.querySelector('.saturn');
let uranus = document.querySelector('.uranus');
let neptune = document.querySelector('.neptune');

mercury.style.backgroundColor = "brown";
venus.style.backgroundColor = "cornflowerBlue"
earth.style.backgroundColor = "dodgerBlue"
mars.style.backgroundColor = "Firebrick"
jupiter.style.backgroundColor = "FloralWhite"
saturn.style.backgroundColor = "Khaki"
uranus.style.backgroundColor = "lightcyan"
neptune.style.backgroundColor = "mediumslateblue"