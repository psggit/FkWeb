import React from "react";

function SearchLayout({children,custom}) {

  return (
    <>
<div className={`layout-container ${custom}`}>
    {children}
</div>
    </>
  );
}

export default SearchLayout;
