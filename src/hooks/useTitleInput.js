import { useState, useEffect, useDebugValue } from 'react';

export default function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });

  // useDebugValue(value);
  useDebugValue(value.length > 0 ? 'Full' : 'Empty');

  return [value, setValue];
}
