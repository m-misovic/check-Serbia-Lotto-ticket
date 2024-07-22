const PickedNumbers = ({ title, pickedNumbers, checkMatch, onClick, spantitle }) => {
  return (
    <div className="numbers_range_div">
      <p>{title}</p>
      <div className="numbers_range">
        {pickedNumbers.map((number) => (
          <span key={number} className={checkMatch(number.toString())} onClick={() => onClick(number)} title={spantitle}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PickedNumbers;
