import React, { useEffect } from "react";
import { DragRaceWinners } from "../components/DragRaceWinners";

const App = () => {
  const [winners, setWinners] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://www.nokeynoshade.party/api/queens/winners")
      .then(
        (response) => response.json(),
        (error) => setError(error)
      )
      .then((data) => setWinners(data));
  }, []);

  if (error) {
    return (
      <div role="alert">
        ⚠️ Uh oh, an error occured: <pre>{error.message}</pre>
      </div>
    );
  } else {
    return <DragRaceWinners winners={winners ?? []} />;
  }
};

export default App;
