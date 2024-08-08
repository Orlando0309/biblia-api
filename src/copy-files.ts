import * as fs from 'fs';
import * as path from 'path';

function copyFolderSync(from: string, to: string): void {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

const sourceFolder = path.join(__dirname, '../', 'Testamenta');
const destinationFolder = path.join(__dirname, 'Testamenta');

console.log(`Copying files from ${sourceFolder} to ${destinationFolder}`);
copyFolderSync(sourceFolder, destinationFolder);
console.log(`Copied files from ${sourceFolder} to ${destinationFolder}`);
