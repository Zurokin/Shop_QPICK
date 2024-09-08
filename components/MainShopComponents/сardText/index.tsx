import * as React from "react";

const AsidesRow = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex justify-between font-semibold items-center relative pt-6">
      {children}
    </div>
  );
};

export default AsidesRow;
