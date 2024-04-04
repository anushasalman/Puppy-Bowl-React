import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SelectedPup = ({baseUrl}) => {
  const [pupper, setPupper] = useState({});
  const navigate = useNavigate();

const { playerId } = useParams();
// fetching single puppy
const fetchSinglePupper = async () => {
  try {
    const response = await fetch(`${baseUrl}/players/${playerId}`);
    const result = await response.json();
    console.log(result);
    setPupper(result.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSinglePupper();
}, []);

  return (
    <>
      <h1>Selected puppy deets here</h1>
      {/*<h3>{player.name}</h3>
      <p>{player.breed}</p>*/}
      <button onClick={() => {
        navigate("/players");
      }}>Go back</button>
    </>
  )
}

export default SelectedPup;