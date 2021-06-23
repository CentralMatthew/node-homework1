// const fs = require('fs');
// const path = require('path');
// const group18 = path.join(__dirname, '1800');
// const group20 = path.join(__dirname, '2000');
// const boys = path.join(__dirname, 'boys');
// const girls = path.join(__dirname, 'girls');
//
// fs.mkdir(girls, err => {
//     if (err) {
//         return err;
//     }
// })
// fs.mkdir(boys, err => {
//     if (err) {
//         return err;
//     }
// })
//
//
// function moveToGender(group) {
//     fs.readdir(group, (err, files) => {
//         if (err) {
//             return err;
//         }
//         files.forEach(file => {
//             fs.readFile(path.join(group, file), (err, data) => {
//                 if (err) {
//                     return err;
//                 }
//                 let student = JSON.parse(data.toString());
//                 if (student.gender === 'female') {
//                     fs.rename(path.join(group, file), path.join(girls, file), err => {
//                         if (err) {
//                             return err;
//                         }
//
//                     })
//                 }
//                 if (student.gender === 'male') {
//                     fs.rename(path.join(group, file), path.join(boys, file), err => {
//                         if (err) {
//                             return err;
//                         }
//
//                     })
//                 }
//             })
//         })
//
//     })
//
//
// }
//
// moveToGender(group18);
// moveToGender(group20);