// Display the welcome message and prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Set up stdin to read the input from the user
process.stdin.on('data', (data) => {
  // Remove the newline character from the input
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close stdin to end the program
  process.stdin.end();
});

// When stdin is closed, display the closing message (on uninteractive mode)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
