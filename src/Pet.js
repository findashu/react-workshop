import React from "react";

// export default function Pet(props) {
//   //   return React.createElement("div", {}, [
//   //     React.createElement("h1", {}, props.name),
//   //     React.createElement("h2", {}, props.animal),
//   //     React.createElement("h1", {}, props.breed),
//   //   ]);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// }

const Pet = function ({ name, location, animal, breed, media, id }) {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
