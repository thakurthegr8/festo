import React from "react";
import BarLoader from "react-spinners/BeatLoader";
{
  /* <span className="w-8 h-8 block border-2 rounded-full border-r-primary animate-spin"></span> */
}
const Loader = () => {
  return <BarLoader color="red" size={10}/>;
};

export default Loader;
