const fs = require('fs').promises;
const filename = 'data.txt';

async function fileCRUD() {
    try{
        await fs.writeFile(filename, "Hello, This is initial text.\n");
        console.log ('File Created');
        await fs.appendFile(filename,"Hello, This is appended text.\n");
        console.log ('File Updated');
        let data = await fs.readFile(filename,'utf-8');
        console.log ('File Content after Update.\n' + data);
        await fs.unlink (filename);
        console.log ('File Deleted');
    } catch(error){
        console.error ('Error:', error);
    }
};
fileCRUD();