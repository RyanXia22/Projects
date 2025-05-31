import React from 'react';
import './list_item.css'

function ListItem({content}) {
    return ( 
      <>
      <h4>Date: {content.date}</h4>
      {content.weight && <h4>Weight: {content.weight} kg</h4>}
      <ul style={{margin:'10px'}}>
        {content.exercises.map((ex, idx) => (
          <li style={{margin:'2px'}} key={idx}> 
            {ex.name} - {ex.sets} sets x {ex.reps} reps @ {ex.weight} lbs
          </li>
        ))}
      </ul>
      </>
    );
  }
  
  export default ListItem;

  