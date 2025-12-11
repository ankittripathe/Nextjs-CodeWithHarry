import React from "react";

const ValPage = async ({ params }) => {
  const { val } = await params;
  console.log(val);

  return <div>My Blog Post: {val}</div>;
};

export default ValPage;
