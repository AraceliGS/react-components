import React from 'react';
import PropTypes from 'prop-types'; 

const HobbiesList = ({hobbies}) => (
  <ul>
    {hobbies.map(el => {
    return <li key={el}>{el}</li>
    })}
  </ul>
)

HobbiesList.proptypes = {
  hobbies: PropTypes.array.isRequired
}

export default HobbiesList;

