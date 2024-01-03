import { useState } from "react";
import bird from "./assets/svg/bird.svg";
import cat from "./assets/svg/cat.svg";
import cow from "./assets/svg/cow.svg";
import dog from "./assets/svg/dog.svg";
import gator from "./assets/svg/gator.svg";
// import heart from "./assets/svg/heart";
import horse from "./assets/svg/horse.svg";
import AnimalsShow from "./components/AnimalsShow";
function App() {
  const [animals, setAnimals] = useState([]);
  const getRandomAnimal = () => {
    const animals = [bird, cat, cow, dog, gator, horse];
    return animals[Math.floor(Math.random() * animals.length)];
  };
  const handleGenerate = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  console.log(animals);
  return (
    <>
      <h1>Animal Love</h1>
      <h3>Click on Animal to Give Love</h3>
      <button onClick={handleGenerate}>Generate Animal</button>
      <div style={{ display: "flex", gap: "10px" }}>
        {animals.map((animal) => {
          return (
            <div key={animal}>
              <AnimalsShow animal={animal} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
