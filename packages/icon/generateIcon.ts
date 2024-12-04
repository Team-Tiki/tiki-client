import fs from "fs";
import path from "path";

const snakeToPascalCase = (fileName: string) => {
  return fileName
    .split("_")
    .map((str) => {
      const firstLetter = str.charAt(0).toUpperCase();

      return firstLetter + str.slice(1);
    })
    .join("");
};

const generate = () => {
  const svgDir = path.join(__dirname, "src");
  const outputDir = path.join(__dirname, "index.ts");

  const files = fs.readdirSync(svgDir).map((svg) => ({
    file: svg,
    fileName: snakeToPascalCase(path.basename(svg, ".svg")),
  }));

  fs.writeFileSync(
    outputDir,
    files
      .map(
        (file) =>
          `export { default as ${path.basename(file.fileName, ".tsx")} } from "./src/${path.basename(file.fileName, ".tsx")}";`,
      )
      .join("\n")
      .concat("\n"),
  );
};

generate();
