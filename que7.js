const { log } = require('console');
const fs = require('fs/promises');


function deleteFile(filepath){
    return new Promise((success, fail)=>{

        fs.unlink(filepath).then(  () => {
            success("file deleted");
        }).catch(() => {
            fail("error occurs");
        });
    })
}

deleteFile("./abc.txt").then(
    (data)=>{
        log("Result  : "+ data);
    }
);
