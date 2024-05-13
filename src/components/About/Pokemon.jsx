import PropTypes from "prop-types";

export default function Pokemon({ data }) {
  console.log(data);
  return (
    <>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
    </>
  );
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};
