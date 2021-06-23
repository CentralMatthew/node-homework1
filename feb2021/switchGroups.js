// const fs = require('fs')
// const path = require('path')
// const group18 = path.join(__dirname, '1800');
// const group20 = path.join(__dirname, '2000');
//
// function switchStudents (firstGroup, secondGroup) {
//     fs.readdir(firstGroup, (err, files) => {
//         if (err) {
//             return err
//         }
//         console.log(files)
//         files.forEach(file => {
//             fs.rename(path.join(firstGroup, file), path.join(secondGroup, file), err => {
//                 if (err) {
//                     return err
//                 }
//             })
//
//         })
//
//     })
//
// }
//
//
// switchStudents(group18, group20)
// switchStudents(group20, group18)