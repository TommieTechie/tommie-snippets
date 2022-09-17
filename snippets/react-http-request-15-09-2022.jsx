import React, { useEffect } from "react";
import { DragRaceWinners } from "../components/DragRaceWinners";

const App = () => {
  const [winners, setWinners] = useState();

  useEffect(() => {
    fetch("http://www.nokeynoshade.party/api/queens/winners")
      .then((response) => response.JSON())
      .then((data) => setWinners(data));
  });

  return <DragRaceWinners winners={winners ?? []} />;
};

export default App;
