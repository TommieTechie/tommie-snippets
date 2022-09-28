import React, { useState, useEffect } from "react";
import { DragRaceWinners } from "../components/DragRaceWinners";

const App = () => {
  const [state, setState] = useState({
    status: "idle",
    winners: null,
  });

  const { status, winners } = state;

  useEffect(() => {
    setState({ status: "pending" });

    fetch("http://www.nokeynoshade.party/api/queens/winners")
      .then((response) => {
        response.json();
        setState({ status: "resolved", winners: response });
      })
      .then((data) => setState(data));
  }, []);

  if (status === "idle") {
    return "No HTTP request yet. 🤷";
  } else if (status === "pending") {
    return "Loading...⏳";
  } else if (status === "resolved") {
    return <DragRaceWinners winners={winners ?? []} />;
  }

  throw new Error("This line should be unreachable.");
};

export default App;
