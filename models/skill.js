import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  proficiency: String,
  favorite: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}