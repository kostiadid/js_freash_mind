const poll = new Map();
const voters = new Set();

function addOption(option) {
  if (option.length === 0) {
    return `Option cannot be empty.`;
  }
  if (!poll.has(option)) {
      poll.set(option, new Set());
      return `Option "${option}" added to the poll.`;
  }
  return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voteKey = `${voterId}|${option}`;

  if (voters.has(voteKey)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voteKey);
  poll.get(option).add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let lines = ["Poll Results:"];
  for (let [option, votersSet] of poll.entries()) {
    lines.push(`${option}: ${votersSet.size} votes`);
  }
  return lines.join("\n");
}

addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");

console.log(displayResults());
