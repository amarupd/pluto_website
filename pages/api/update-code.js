import childProcess from 'child_process'


const exec = childProcess.exec;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  try {
    exec("./script.sh", function (error, stdout, stderr) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write("<h1>DONE</h1>")
      res.end(error ? stderr : stdout);
    });
  } catch (err) {
    return res.json({ error: err?.message })
  }
}
