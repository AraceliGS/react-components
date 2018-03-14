import React from 'react';

const HobbiesList = ({hobbies}) => (
  <ul>
    {hobbies.map(el => {
    return <li>{el}</li>
    })}
  </ul>
)

export default HobbiesList;