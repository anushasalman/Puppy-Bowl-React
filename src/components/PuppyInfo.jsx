const PuppyInfo = ({ baseUrl, player, setUpdatePage }) => {

  const handleClick = async () => {

    try {
      const response = await fetch(`${baseUrl}/players/${player.id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setUpdatePage(true);
      }
    }
    catch (error) {
      console.log("Something went wrong", error);
    }

  }
  return (
    <>
      <div className="puppyInfo">
        <img className="puppyImg" src={player.imageUrl} />
        <h4>{player.name}</h4>
        <button onClick={handleClick}>Adopt a pup to make life better</button>
      </div>
    </>
  );
};

export default PuppyInfo;