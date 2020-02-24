// ['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle']
// 'ABDHKMRSTV' - ABDHKMRSTV
//let createDreamTeam = function (members) {
  module.exports =   function createDreamTeam(members) {  // эта строка нужна
  let sortMembers;
  let team = '';
  if (typeof members === 'object' && (members != null)) {
  //  console.log('good');
    sortMembers = members.sort();



    for (let i = 0; i < sortMembers.length; i++) {
      if (typeof sortMembers[i] === 'string' && (sortMembers[i] != null)) {

   //            console.log(sortMembers[i]);
        for (j = 0; j < sortMembers[i].length; j++) {
          //          console.log(sortMembers[i][j]);
          if (sortMembers[i][j] !== ' ') {
            //            console.log(sortMembers[i][j]);
            team += sortMembers[i][j];
            break;
          }
        }
      } else {
    //    console.log('wtf')
        return false;
      }
    }
  } else {
 //   console.log('wtf2')
    return false;
  }
  return team;
};
// let arr = ['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle'];
// //let arr = 123;
// let aa = createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
// console.log(aa);
// console.log(typeof arr === 'object');