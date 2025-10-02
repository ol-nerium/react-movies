import React, { useState } from 'react';

export default function SearchBox({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
