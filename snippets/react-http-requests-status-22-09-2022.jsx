import React, { useState, useEffect } from "react";
import { DragRaceWinners } from "../components/DragRaceWinners";

const App = () => {
  const [status, setStatus] = useState("idle");
  const [winners, setWinners] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    fetch("http://www.nokeynoshade.party/api/queens/winners")
      .then(
        (response) => {
          response.json();
          setStatus("resolved");
        },
        (error) => {
          setError(error);
          setStatus("rejected");
        }
      )
      .then((data) => setWinners(data));
  }, []);

  if (status === "idle") {
    return "No HTTP request yet. 🤷";
  } else if (status === "pending") {
    return "Loading...⏳";
  } else if (status === "rejected") {
    return (
      <div role="alert">
        ⚠️ Uh oh, an error occured: <pre>{error.message}</pre>{" "}
      </div>
    );
  } else if (status === "resolved") {
    return <DragRaceWinners winners={winners ?? []} />;
  }

  throw new Error("This line should be unreachable.");
};

export default App;
