import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function newTodo(req,res) {
  res.render('skills/new')
}

export {
  index,
  newTodo as new,

}