// ['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle']
// 'ABDHKMRSTV' - ABDHKMRSTV
// let createDreamTeam = function (members) {
module.exports = function createDreamTeam(members) {  // эта строка нужна
  let sortMembers;
  let team = '';
  if (typeof members === 'object' &&
    (members != null) &&
    (members != undefined) &&
    (members != false) &&
    arguments[0]) {

    let trimmedArr = [];
    for (let i = 0; i < members.length; i += 1) {
      if (members[i] && typeof members[i] == 'string') {
        trimmedArr.push(members[i].trim().toUpperCase());
      }
    }

    sortMembers = trimmedArr.sort();
    
    for (let i = 0; i < sortMembers.length; i++) {
        for (j = 0; j < sortMembers[i].length; j++) {
          team += sortMembers[i][j];
          break;
        }
    }
  } else {
    return false;
  }
  return team;
};
