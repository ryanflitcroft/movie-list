import React from 'react';

export default function MovieForm() {
  return (
    <section>
      <form>
        <label htmlFor='name'>Title</label>
        <input name='title' type='text' placeholder='Paranoid Park' value={''} required />
        <label htmlFor='director'>Director</label>
        <input name='director' type='text' placeholder='Gus Van Sant' value={''} required />
        <label htmlFor='yearReleased'>Year Released</label>
        <input name='yearReleased' type='number' min='1900' max='2022' placeholder='2007' value={''} required />
        <label htmlFor='color'>Color</label>
        <input type='color' value={''} required />
      </form>
    </section>
  );
}
