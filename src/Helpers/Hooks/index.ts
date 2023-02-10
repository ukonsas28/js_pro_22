import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [flag, changeFlag] = useState(initialValue);

  const toggle = useCallback(() => {
    changeFlag((flag) => !flag);
  }, []);

  const close = useCallback(() => changeFlag(false), []);
  const open = useCallback(() => changeFlag(true), []);

  return [flag, toggle, close, open] as const;
};
