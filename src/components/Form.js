import React from 'react';
const key = 'b7d146520a6c64b049aa24f19ef9ecb2';
const Form = () => {

    const getCity = e => {
      e.preventDefault();
      const city = e.currentTarget.city.value;
      console.log(city)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(resp => resp.json())
        .then(resp => console.log(`weather in ${city} is ${resp.main.temp} celsius`));
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;