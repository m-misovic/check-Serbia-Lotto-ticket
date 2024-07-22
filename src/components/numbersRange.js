const NumbersRange = ({ title, numbersRange, pickedNumbers, pickedStyle, onClick, spantitle }) => {
  return (
    <div className="numbers_range_div">
      <p>{title}</p>
      <div className="numbers_range">
        {numbersRange &&
          numbersRange.map((number) => (
            <span
              style={pickedNumbers.includes(number) ? pickedStyle : {}}
              key={number}
              onClick={() => onClick(number)}
              title={spantitle}
              className={pickedNumbers.length >= 7 ? "span_number choosen" : "span_number"}
            >
              {number}
            </span>
          ))}
      </div>
    </div>
  );
};

export default NumbersRange;
