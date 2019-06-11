import { useState, useEffect } from 'react';

const useFirstRendered = (...updatedValue) => {
  const [displayedOnce, setAsDisplayed] = useState(false);
  useEffect(() => {
    if (updatedValue[0].length > 0 || updatedValue[1]) {
      setAsDisplayed(true);
    }
  }, [...updatedValue]);

  return displayedOnce;
};

export default useFirstRendered;
