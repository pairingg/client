import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

interface UseInputReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setValue: (value: string) => void;
  reset: () => void;
}

export function useInput(initialValue: string = ''): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSetValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  return {
    value,
    onChange,
    setValue: handleSetValue,
    reset,
  };
}
