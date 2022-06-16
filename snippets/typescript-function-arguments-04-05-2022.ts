function movieReview(
    // Indicates title should be a string
    title: string,
    // Indicates year should be a number
    year: number,
    
    // Forces it to be either 'Good👍' or 'Bad👎' or 'Meh🤷🏽‍♀️'
    rating: 'Good👍' | 'Bad👎' | 'Meh🤷🏽‍♀️'
  ) {
    return `${title} that came out in ${year} was rated ${rating}.`;
  }
  
  
  movieReview('Star Wars', 1981, "Average");
  // 🚫 This will not be accepted since the last type is not good.
  
  movieReview( 'Star Wars',1987, 'Good👍')
  // ✅ This returns: `Star Wars that came out in 1987 was rated Good👍.`