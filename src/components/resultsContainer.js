import Loader from "./loader";

const ResultsContainer = ({ data }) => {
  return (
    <div className="results_container">
      <div>
        <div className="game_info">{data?.kolo}</div>
        <div className="game_info">{data?.date}</div>
        {data?.results ? (
          data?.results.map((game, i) => (
            <div key={i} className="game_container">
              <div className="game_title">{game.title === "Jocker" ? "Joker" : game.title}</div>
              <div className="numbers_container">
                {game.numbers.map((number, j) => (
                  <span className="span_number" key={j}>
                    {number}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ResultsContainer;
