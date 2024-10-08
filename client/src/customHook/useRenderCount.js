import { useEffect, useRef } from "react";

const useRenderCount = () => {
    const renderCount = useRef(0);
    useEffect(() => {
      renderCount.current += 1;
      console.log(`Render count: ${renderCount.current}`);
    });
  };

  export default useRenderCount