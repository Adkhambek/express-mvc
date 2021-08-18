const { PORT } = require("./config");
const app = require("./app");

//server running
app.listen(PORT, () => console.log("server is working"));
