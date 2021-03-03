const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ encoded: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
  app.use(express.status("client/build"));
}

app.user("/api", require("./routes/apiRoutes"));


app.listen(PORT, () => console.log(`listening at localhost:${PORT}`));