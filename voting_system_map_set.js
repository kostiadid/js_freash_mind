let poll = new Map();
let voters = new Set();
function addOption(option){
  if (!option){
    return `Option cannot be empty`
  }
  if (!poll.has(option)){
    poll.set(option)
  } else{
    return `Option "${option}" already exists.`
  }
}


function vote(option,voterId){
  if (!poll.has(option)){
    return `Option "${option}" does not exist.`
  }
  if (voters.has(voterId)){
    return `Voter ${voterId} has already voted for "<option>"`
  }
  voters.add(voterId)
  return `Voter ${voterId} voted for "${option}"` 
}
