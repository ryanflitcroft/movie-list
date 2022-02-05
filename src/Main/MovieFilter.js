import React from 'react';

export default function MovieFilter({
  filter,
  setFilter
}) {
  return (
    <div>
      <h2>Your DVDs</h2>
      <label htmlFor='filter'>Search Movies</label>
      <input onChange={(e) => setFilter(e.target.value)}
        name='filter'
        type='text' 
        value={filter} />
    </div>
  );
}