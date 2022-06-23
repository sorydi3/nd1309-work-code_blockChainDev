#!/usr/bin/env zx

let message = "working on the transaction";

//check status git
let status = await $`git status`;

// git add .
let add = await $`git add .`; // add all the files to the staging area

// git commit -m "message"
let commit = await $`git commit -m ${message}`; // commit the changes

// git push origin master
let push = await $`git push origin master`; // push the changes to the remote repository    

