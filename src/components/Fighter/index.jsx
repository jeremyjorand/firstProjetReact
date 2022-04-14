import SFighter from './style';

function Fighter(props) {
  console.log(props);
  return (
    <SFighter bg={props.image}>
      <section className='globalFighter pictureBat'>
        <div className='idFighter'>{props.id}</div>
        <h4>{props.name}</h4>
        <ul className='placementPoint'>
          <li className='strength rond'>
            <span className='dr'>Strength</span>
            {props.strength}
          </li>
          <li className='speed rond'>
            <span className='dr'>Speed</span>
            {props.speed}
          </li>
          <li className='power rond'>
            <span className='dr'>Power</span>
            {props.power}
          </li>
        </ul>
        <div className='description'>
          <ul>
            <li className='fullName'>Full Name:</li>
            <li>{props.fullName}</li>
            <li className='race'>Race:</li>
            <li>{props.race}</li>
          </ul>
        </div>
      </section>
    </SFighter>
  );
}

export default Fighter;
