import React, { useState } from 'react'

const SelectCountryCode = () => {

const countries = [
    {
        name:"INDIA",
        code:"+91"
    },
    {
        name:"USA",
        code:"+1"
    },
    {
      name:"UK",
      code:"+44"
    },

]

const [selectedCountry, setSelectedCountry]=useState(countries[0])

const handleSelectCountry = (event) =>{
  const selectedCountryName = event.target.value
  const newCountry = countries.find(country=>country.name === selectedCountryName)
  setSelectedCountry(newCountry)
}


  return (
    <div>
      <p className='text-orange-400 font-bold m-5'>SELECT COUNTRY AND CODE</p>
      <select className='border border-black m-5' onChange={handleSelectCountry} value={countries.name}>
        {
            countries.map(country=><option key={country.name}>{country.name}</option>)
        }
      </select>
      <select className='border border-black'>
        <option>{selectedCountry.code}</option>
      </select>
    </div>
  )
}

export default SelectCountryCode
