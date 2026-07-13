import { useEffect, useRef } from 'react';
import { initScatter, SCATTER_CSS } from './scatterCore';

export default function ScatterHome(){
  const ref = useRef(null);
  useEffect(() => initScatter(ref.current), []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCATTER_CSS }} />
      <div className="scatter-root" ref={ref} />
    </>
  );
}
