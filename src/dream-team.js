// ['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle']
// 'ABDHKMRSTV' - ABDHKMRSTV
// let createDreamTeam = function (members) {
  module.exports =   function createDreamTeam(members) {  // эта строка нужна
  let sortMembers;
  let team = '';
  if (typeof members === 'object' && 
    (members != null) && 
    (members != undefined) && 
    (members != false) && 
    arguments[0]) {
   console.log('good');
  // for (let elem of members){
  //   for (let i = 0; i < elem.length; i++){
  //     if(elem[i] === ' '){
  //       elem[i] = '';
  //     }
  //   }
  // }
  let trimmedArr = [];
  for (let i = 0; i < members.length; i += 1) {
    console.log(typeof members[i]);
    if (members[i] && typeof members[i] == 'string') {
      trimmedArr.push(members[i].trim());
    }
   console.log(trimmedArr);
  }
    sortMembers = trimmedArr.sort();



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
  console.log(team.toUpperCase());
  return team.toUpperCase();
};
// let arr = ['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle'];
// //let arr = 123;
// let aa = createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
// console.log(aa);
// console.log(typeof arr === 'object');
// createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ])