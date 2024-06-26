import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    Find countries: <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
