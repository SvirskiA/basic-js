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
    // console.log(trimmedArr);
    // console.log(trimmedArr.sort());
    // console.log(trimmedArr.sort().toUpperCase());
    sortMembers = trimmedArr.sort();



    for (let i = 0; i < sortMembers.length; i++) {
      // if (typeof sortMembers[i] === 'string' && (sortMembers[i] != null)) {

        //            console.log(sortMembers[i]);
        for (j = 0; j < sortMembers[i].length; j++) {
          //          console.log(sortMembers[i][j]);
          // if (sortMembers[i][j] !== ' ') {
          //            console.log(sortMembers[i][j]);
          team += sortMembers[i][j];
          break;
          // }
        }
      // } else {
      //   //    console.log('wtf')
      //   return false;
      // }
    }
  } else {
    //   console.log('wtf2')
    return false;
  }
  // console.log(team);
  return team;
};
