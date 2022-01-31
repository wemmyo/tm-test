import * as React from "react";

interface PageNotFoundProps {}

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Page not found</h1>
    </div>
  );
};

export default PageNotFound;
