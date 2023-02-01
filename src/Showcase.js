import gholdengo from './images/Gholdengo.jpg';
import './Showcase.css';

const Showcase = () => {

  const favPokemon = 'Gholdengo';

  const pokeCharacteristics = {
    firstType: 'Ghost',
    secondType: 'Steel',
    signatureMove: 'Make It Rain'
  };

  return (
    <div className='showcase-wrapper'>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 525, width: 1000, padding: 20}}
        src={gholdengo}
        alt='gholdengo'
      />
      <h2>
        {favPokemon}'s type is{' '}
        <span className='poke-type'>{pokeCharacteristics.firstType}</span>
        {' '}and <span className='poke-type'>{pokeCharacteristics.secondType}</span>{'. '}
        One of their signature moves is{' '}
        <span className='poke-move'>{pokeCharacteristics.signatureMove}</span>.
      </h2>
    </div>
  );
};

export default Showcase;
