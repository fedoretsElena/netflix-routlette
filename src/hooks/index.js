import { useCallback, useState } from "react";

export const useToggle = (initial = false) => {
  const [flag, setFlag] = useState(initial);

  const toggle = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return [flag, toggle];
}
