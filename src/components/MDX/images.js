import Image from "next/image";

// function NextImage(props) {
//   return (
//     <div className="self-center m-2">
//       <Image {...props} />
//     </div>
//   );
// }
// const components = { NextImage };
let components = {};

components.img = (props) => {
  console.log(props);
  return (
    <div className="mt-3">
      <Image {...props} loading="lazy" />
    </div>
  );
};

export default components;
