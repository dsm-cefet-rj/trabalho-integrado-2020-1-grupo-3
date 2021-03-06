import React, { useState } from 'react';
import Calendar from 'react-calendar';
 

function Calendario() {

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
      {value.toString()}
    </div>
  );
}

export default Calendario