import fs from "fs";
import yaml from "js-yaml";

type Friend = {
  name: string;
  url: string;
  img: string;
  desc: string;
};

(() => {
  const filePath = "./src/friends.yml";
  const outputPath = "./dist/friends.json";

  const file: Friend[] = yaml.load(fs.readFileSync(filePath, "utf-8")) as Friend[];
  const newFile = file.map((user) => ({
    ...user,
    avatar: `https://bcdn.bakaomg.cn/blog/friends/${user.avatar}`,
  }));

  fs.mkdirSync("./dist", { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(newFile));
})();