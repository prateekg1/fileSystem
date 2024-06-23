// fileSystem
// files -> create,             read,                    update            delete
// open -w mode,              readFileSync              appendFile        unlinkSync
// writefileSync

let fs = require("fs");

// // read
// let buffer = fs.readFileSync("abc.js");
// //console.log("bin data " +buffer);

// // create
// //fs.openSync("abc.txt","w");

// // create write
// fs.writeFileSync("abc.txt", "done h seen phir bhai")

// // update
// fs.appendFileSync("abc.txt", " \nna bhai")

// folder (directory)
// create                    read                        delete
// mkdirSync                readdirSync                 rmdirSync

// fs.mkdirSync("mydirectory");


//fs.writeFileSync("mydirectory/myfile.txt", "my content");

// let content = fs.readdirSync("mydirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
// console.log("file", content[i], "is removed");
// fs.unlinkSync("mydirectory/" + content[i]);

// }
// fs.rmdirSync("mydirectory");

// fs.existSync -> if a file exists -> true/false

// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);

// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);

// // fs.lstatSync -> fs.lstatSync

// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);

// ans = detailsObj.isDirectory();
// console.log(ans);

for(let i =1; i <=10 ; i++){

    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md", ` # readme for ${dirPathToMake}`)
}