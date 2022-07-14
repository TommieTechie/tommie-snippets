try {
    // Since this function does not exist, it will throw an error.
    notDefinedFunction();
    
    // You can also do manuel checks and throw Errors!
    if (!process.env.VAR) {
      throw new Error("VAR is not defined");
    }
  } 
  // Catch will get the first error to occur in the try above.
  catch (error) {
    console.error(error);
  }