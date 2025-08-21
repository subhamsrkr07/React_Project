
import express from 'express'
import { influncer } from '../Data/influncer.js'

const dataRoute = express.Router()


dataRoute.get("/", (req, res) => {
  res.json(influncer)
})

dataRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const influencer = influncer.find((inf) => inf.id === id);
  if (!influencer) {
    return res.status(404).json({ message: "Influencer not found" });
  }
  res.json(influencer);
});

export default dataRoute
