import { createServer } from "cors-anywhere";

const originWhitelist = ["https://ping-me-ucyi.onrender.com/"];
const port = 3001;

createServer({
    originWhitelist,
}).listen(3001, () => {
  console.log("Listening on port " + port);
});
