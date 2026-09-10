import { useEffect, useRef } from 'react';
import { SCATTER_CSS } from './scatterCore';
import { mountWorkPage } from './scatterWorkCore';

export default function ScatterProjectPage({ data }) {
  const ref = useRef(null);
  useEffect(() => {
    const cleanup = mountWorkPage(ref.current, data);
    return cleanup;
  }, [data]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCATTER_CSS }} />
      <div className="scatter-root">
        <div id="workPage" className="on" ref={ref} />
      </div>
    </>
  );
}
