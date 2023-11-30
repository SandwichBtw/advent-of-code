import fs from "fs";
import path from "path";

export function getInput(dayNumber: number) {
    const dayDirectory = `day-${dayNumber}`;
    const filePath = path.join(__dirname, '..', dayDirectory, 'input.txt');

    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error: any) {
        console.error(`Error reading input file for day ${dayNumber}: ${error.message}`);
        return null;
    }
}