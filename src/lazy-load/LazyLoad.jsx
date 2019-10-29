import React, { lazy, Suspense } from "react";
const SlowLoad = lazy(() => import("./SlowLoad"));

function LazyLoad() {
  return (
    <div>
      <div>Another Component</div>
      <Suspense fallback={<div>...Loading SlowLoad Component </div>}>
        <SlowLoad />
      </Suspense>
    </div>
  );
}

export default LazyLoad;
