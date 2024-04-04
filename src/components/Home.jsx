import AddPuppy from "./AddPuppy";
import PuppyList from "./PuppyList";

const Home = ({setUpdatePage, baseUrl, updatePage}) => {
  
  return (
    <>
    
      <AddPuppy baseUrl={baseUrl} setUpdatePage={setUpdatePage} />
      <PuppyList baseUrl={baseUrl} setUpdatePage={setUpdatePage} updatePage={updatePage} />
    </>
  )
}

export default Home;