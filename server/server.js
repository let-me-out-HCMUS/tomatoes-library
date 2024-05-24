const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const storyRouter = require("./router/story");
const categoryRouter = require("./router/category");

// set environment
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// middleware
app.use(express.json());
app.use(cors());

// Set default route
app.use("/api/v1/stories", storyRouter);
app.use("/api/v1/categories", categoryRouter);


// Handle when go to undefined route
app.all("*", (req, res, next) => {
  next(new AppError(404, `Can't find ${req.originalUrl} on this server !`));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});
