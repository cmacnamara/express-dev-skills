import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time,
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

function create(req,res) {
  req.body.favorite = !!req.body.favorite;
  console.log(req.body);
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function show(req,res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function deleteSkill(req,res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(sklll => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function edit(req,res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/edit', {
      skill
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function update(req,res) {
  req.body.favorite = !!req.body.favorite;
  console.log(req.body);
  Skill.findByIdAndUpdate(req.params.skillId, req.body, {new: true})
  .then(skill => {
    console.log('Edited skill', skill);
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

export {
  index,
  newTodo as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update,
}