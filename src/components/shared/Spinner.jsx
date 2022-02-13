import spinner from '../assets/Spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
