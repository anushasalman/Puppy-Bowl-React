import { useState } from "react";

const AddPuppy = ({ baseUrl, setUpdatePage }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const newPuppy = async () => {
    try {
      const response = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          name, 
          breed, 
          imageUrl 
        })
      });
      const result = await response.json();
      console.log(result);
      setName("");
      setBreed("");
      setImageUrl("");
      if (result.success) {
        setUpdatePage(true);
      }

    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPuppy();
  };

  return (
    <>
      <h3>Add Competitor:</h3>
      <form onSubmit={handleSubmit}>

        <div className="formStyling">
          <label>
            Name:
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
          </label><br></br>

          <label>
            Breed:
            <input type="text" id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}></input>
          </label><br></br>

          <label>
            Image:
            <input type="text" id="imgUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
          </label><br></br>

          <button className="button">
            <input type="submit" value="Add Competitor" />
          </button>

        </div>
      </form>
    </>
  );
};

export default AddPuppy;