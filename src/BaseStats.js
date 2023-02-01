import './BaseStats.css';

const BaseStats = ({ clicker, stats: { hp, attack, defense, spAttack, spDef, speed } }) => {
  return (
    <div className='stats'>
      <h1>BaseStats</h1>
      <div className='base-stats'>
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defense}</td>
            </tr>
            <tr>
              <td>SpAttack</td>
              <td>{spAttack}</td>
            </tr>
            <tr>
              <td>SpDefense</td>
              <td>{spDef}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={clicker} className='total'>
          Check Total Stats
      </button>
    </div>
  );
};

export default BaseStats;
