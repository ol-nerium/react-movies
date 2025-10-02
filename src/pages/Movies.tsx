import { useState } from 'react';

export default function Movies() {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
