import React from 'react';
import HobbiesList from './HobbiesList'

const hobbies =['dibujar', 'bailar', 'ver anime'];

const Section =() => (
  <div>
    <p>Hola, soy una front-end developer de Laboratoria. Me encantan los retos y estoy aprendiendo React.</p>
    <HobbiesList hobbies={hobbies}/>
  </div>
)

export default Section;