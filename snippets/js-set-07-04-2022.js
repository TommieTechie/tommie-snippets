// What is a Set? Set objects contains values that can only occur a single time! 
// Each of the values are unique, so sets cannot have duplicates!

// Here’s how would you go to create your first set!
const set = new Set();


// Next, let’s try adding fruits in the set!
set.add('mango');
set.add('dragon fruit');

// Is a certain item in the set? Let’s check it out!
set.has('mango'); // Returns true
set.has('coconut'); // Returns false

// The dragon fruit is not ripe yet? Time to delete it!
set.delete('dragon fruit');

// How many fruits are left in the set? Let’s find out.
set.size();

// Nothing like a fresh start. Let’s delete everything!
set.clear();
