import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    let data = await fs.promises.readdir("contactdata");
    let lenght = data.length;

    await fs.promises.writeFile(
      `contactdata/${lenght + 1}.json`,
      JSON.stringify(req.body)
    ); 
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}
