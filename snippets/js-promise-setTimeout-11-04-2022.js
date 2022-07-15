async function delay (seconds) {
    return new Promise( resolve => {
    setTimeout(resolve, seconds * 1000);
   });
  }
  
  async function mainScript() {
      console.log("Doing something");
      await delay(1);
      console.log("Doing something else");
      await delay(2);
      console.log("Doing another thing");
      await delay(3);
      console.log("Finished!");
  }
  
  mainScript();