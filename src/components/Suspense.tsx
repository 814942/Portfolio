import { Suspense } from "react";

import SuspenseFallback from "./SuspenseFallback";

const suspense = (element: React.ReactNode) => (
  <Suspense fallback={ <SuspenseFallback /> } >
    {element}
  </Suspense>
);

export default suspense;