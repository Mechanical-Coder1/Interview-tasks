import React, { useState } from 'react';

const SelectStateCity = () => {
  const states = [
    {
      name: "Telangana",
      cities: ["Hyderabad", "Warangal"],
    },
    {
      name: "Maharashtra",
      cities: ["Mumbai", "Pune"],
    },
  ];

  const [selectedState, setSelectedState]=useState(states[0])
  
  const handleSetState = (event)=>{
        const selectedStateName = event.target.value
        const newState = states.find(state=>state.name === selectedStateName)
        setSelectedState(newState)
  }
  
  return (
    <div className="">
      <p>SELECT STATE AND CITY</p>

        <select className='border border-black' onChange={handleSetState} value={states.name} >
           {
            states.map(state=><option key={state.name}>{state.name}</option>)
           }
        </select>
        <select>
            {
                selectedState.cities.map(city=><option key={city}>{city}</option>)
            }
        </select>
      
    </div>
  );
};

export default SelectStateCity;
