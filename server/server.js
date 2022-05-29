const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const companyRouter = require("./routes/companyRouter");
require("dotenv").config();

app.use(cors());
app.use("/", express.json());
app.use("/company", companyRouter);
app.use("/user", userRouter);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
