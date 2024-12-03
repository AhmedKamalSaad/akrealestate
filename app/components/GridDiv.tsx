import React, { PropsWithChildren } from "react";

const GridDiv = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 grid-flow-dense	">
      {children}
    </div>
  );
};

export default GridDiv;
