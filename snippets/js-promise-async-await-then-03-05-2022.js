const API_ROUTE = "https://www.nokeynoshade.party/api/queens/all";

const getAllQueens = async () => {
  const response = await fetch(API_ROUTE);
  const queens = await response.json();
  return queens;
};

fetch(API_ROUTE)
  .then((data) => data.json())
  .then((queens) => {
    // Now, you can do anything you want with the data.
    console.log(queens[0]);
  });

// Link to Twitter post: https://twitter.com/TommiEng/status/1521631124656635906
