import React from "react";
import "./Card.css";
let data = [
  {
    image:
      "https://images.unsplash.com/photo-1534228746812-f15c4d80e702?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Products are Lotus 56",
    description:
      "Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimoi vel",
    InStock: true,
    message: "this is a new product",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676272747130-348694463771?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Products are Roses 67",
    description:
      "Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos deleniti vel",
    InStock: false,
    message: "this is best product bring them",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Products are Lily 45",
    description:
      "Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos deleniti vel",
    InStock: false,
    message: "this is latest product",
  },
];
function Card(prop) {
  function handleClick(message) {
    alert(message);
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-4">
        <div>{prop.children}</div>
        {data.map((elem, index) => (
          <div
            key={index}
            className="w-52 bg-zinc-100 rounded-md overflow-hidden"
          >
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold avatar">{elem.name}</h2>
              <p className="text-xs mt-3">{elem.description}</p>
            </div>
            <button
              onClick={() => handleClick(`you click on ${elem.message}`)}
              className={`px-4 py-1 ${
                elem.InStock ? "bg-sky-600" : "bg-red-600"
              } rounded-md text-xs text-white ml-3 mb-2`}
            >
              {elem.InStock ? "Instock" : "OutofStock"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
