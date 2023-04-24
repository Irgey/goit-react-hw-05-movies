export const CastCard = ({ photoPath, name, character }) => {
  return (
    <>
      {photoPath ? (
        <img src={`https://image.tmdb.org/t/p/w200/${photoPath}`} alt={name} />
      ) : (
        <img
          src="https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg"
          alt="cast placeholder"
          width="200"
        />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};
