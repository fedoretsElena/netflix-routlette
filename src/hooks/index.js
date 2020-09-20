import { useCallback, useEffect, useRef, useState } from "react";

// lifecycle hooks

export const useComponentDidMount = (callback) => {
  useEffect(() => { callback() }, []);
}

export const useComponentDidUpdate = (callback, memo) => {
  const flag = useRef(false);

  if (!flag.current) {
    flag.current = true;
    return;
  }

  useEffect(() => { callback() }, memo);
}

export const useComponentWillUnmount = (callback) => {
  useEffect(() => callback);
}

// ----------------

export const useToggle = (initial = false) => {
  const [flag, setFlag] = useState(initial);

  const toggle = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return [flag, toggle];
}



