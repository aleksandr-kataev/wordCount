const fs = require("fs/promises");
const FILENAME = "input.txt";

const readFile = async (filename: string) => {
  try {
    const path = `./${filename}`;
    const file = fs.readFile(path, { encoding: "utf8" });
    return file;
  } catch (err) {
    console.log(err);
  }
};

const countWords = async (filename: string) => {
  const file: string = await readFile(filename);
  const cleanedString: string = file.replace(/(\r\n|\n|\r)/gm, " ");
  const wordArray: string[] = cleanedString.split(" ").filter((e) => e !== "");
  return wordArray.length;
};

async function main() {
  const wordCount = await countWords(FILENAME);
  console.log(wordCount);
}

if (require.main === module) {
  main();
}
