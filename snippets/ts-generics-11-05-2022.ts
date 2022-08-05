type Joke = {
    question: string;
    punchline: string;
  }
  
  const JOKE_API_URL = 'https://backend-omega-seven.vercel.app/api/getjoke';
  
  // As we declare the function, we don't know yet the return type.
  async function apiRequest<ReturnType>(url: string): Promise<ReturnType> {
    const res = await window.fetch(url);
    const data = res.json();
  
    return data;
  }
  
  // When calling the function, we can pass our return type.
  apiRequest<Joke[]>(JOKE_API_URL)
    // Jokes are now typed.
    .then(jokes => { /* Do something with the jokes. */ });