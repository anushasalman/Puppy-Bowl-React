import PuppyInfo from "./PuppyInfo";
import { useEffect, useState } from "react";

const COHORT_NAME = `2402-FTB-ET-WEB-FT`;
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

const PuppyList = ({ baseUrl, updatePage, setUpdatePage }) => {

  const [competitorList, setCompetitorList] = useState([]);
  // initial value, that's why it is []

  useEffect(() => {
    if (updatePage) {
      const fetchPuppyList = async () => {
        try {
          const response = await fetch(`${baseUrl}/players`);
          const result = await response.json();
          setCompetitorList(result.data.players);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPuppyList();
      setUpdatePage(false);
    }
  }, [updatePage]);

  return (
    <>
      <h2>Competitors:</h2>
      <p>Click a puppy's name to see more details 🐶</p>
      <div className="pupSection">
        {competitorList.length ? (
          competitorList.map((player) => {
            return <PuppyInfo key=
            {`player_${player.id}`} player={player} baseUrl={baseUrl} setUpdatePage={setUpdatePage} 
            />;
            <>
            <Routes>
              <Route path='/puppy/:id' element={<SelectedPup />} />
            </Routes>
            </>
          })
        ) : (
          <p>go look for some pups!</p>
        )}
      </div>
    </>
  );
};
export default PuppyList;