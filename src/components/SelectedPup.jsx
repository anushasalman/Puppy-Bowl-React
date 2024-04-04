import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const COHORT_NAME = `2402-FTB-ET-WEB-FT`;
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

const SelectedPup = ({baseUrl}) => {
  const [pupper, setPupper] = useState();
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
      {/* <h3>{player.name}
      <p>{player.breed}</p> */}
      <button onClick={() => {
        navigate("/");
      }}>Go back</button>
    </>
  )
}

export default SelectedPup;