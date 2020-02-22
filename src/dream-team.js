module.exports =  function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  let team = [];
  members.map(element => {
    if (typeof element === 'string') {
      team.push(element.trim()[0].toUpperCase());
    } else {
      return false;
    }
  })
  return team.sort().join('');
};



