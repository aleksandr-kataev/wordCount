const fs = require("fs/promises");
const args = process.argv;

const readFile = async (filename: string): Promise<string> => {
  const path: string = `./${filename}`;
  return fs.readFile(path, { encoding: "utf8" });
};

const countWords = async (filename: string): Promise<number> => {
  const file: string = await readFile(filename);
  const cleanedString: string = file.replace(/(\r\n|\n|\r)/gm, " "); // regex to remove line breaks
  // Turn the string into array of words and remove occurrences where there are more than 1 line break resulting in
  // empty array element, then return the length of the array
  const wordArray: string[] = cleanedString.split(" ").filter((e) => e !== "");
  return wordArray.length;
};

async function main() {
  // Read file based on supplied filename
  const wordCount: number = await countWords(args[2]);
  console.log(wordCount);
}

main();
