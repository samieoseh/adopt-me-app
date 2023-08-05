/* eslint-disable react/prop-types */

const Pet = ({ name, type, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;
