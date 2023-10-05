import * as fs from "fs";
import path from "path";
//http://192.168.18.12:3000/api/getblog?slug=data2
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    try {
      console.log(req.query.slug);
      res.status(200).json(JSON.parse(data));
    } catch (err) {
      res.status(404).json({ message: "Blog not found" });
    }
  });
}
