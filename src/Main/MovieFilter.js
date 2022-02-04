import React from 'react';

export default function MovieFilter({
  filter,
  setFilter
}) {
  return (
    <>
      <label htmlFor='filter'>Search Movies</label>
      <input onChange={(e) => setFilter(e.target.value)}
        name='filter'
        type='text' 
        value={filter} />
    </>
  );
}
