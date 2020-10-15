import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';

import { useToggle } from './index';

describe('useToggle hook', () => {
  it('should toggle state', () => {
    const {result, waitForNextUpdate} = renderHook(() => useToggle());
    expect(result.current[0]).toBeFalsy();
    waitForNextUpdate();

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBeTruthy();
  });
});
