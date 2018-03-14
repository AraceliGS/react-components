import React from 'react';
import PropTypes from 'prop-types'; 
import HobbiesList from './HobbiesList';

const data = {
  text:'Hola, soy una front-end developer de Laboratoria. Me encantan los retos y estoy aprendiendo React.',
  image: 'https://www.anime-planet.com/images/characters/chise-hatori-69404.jpg', 
  hobbies: ['dibujar', 'bailar', 'ver anime']
}

const Section =() => (
  <div>
    <p>{data.text}</p>
  <img src={data.image}/>
  <HobbiesList hobbies={data.hobbies}/>
</div>
)

Section.proptypes = {
  data: PropTypes.object.isRequired
}

export default Section;