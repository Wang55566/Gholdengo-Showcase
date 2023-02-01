import "./App.css"
import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import PokeMoves from "./PokeMoves";


function App() {

  const baseStats = {
    hp: 87,
    attack: 60,
    defense: 95,
    spAttack: 133,
    spDef: 91,
    speed: 84,
    total: 550
  }

  // click handler
  const handleClick = () => {
    alert(
      `Total Stats:\n\tTotal Stats: ${baseStats.total}`
    );
  }

  return (
    <div className="main-wrapper background">
      <Showcase />
      <BaseStats clicker={handleClick} stats={baseStats} />
      <PokeMoves />
    </div>
  );
}

export default App;
