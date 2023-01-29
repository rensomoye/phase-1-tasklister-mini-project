document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildTask(document.getElementById("new-task-description").value)
  form.reset()
})
});

function buildTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  p.textContent = `${task} `
  btn.textContent = 'x'
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
  btn.addEventListener('click', deleteTask  )
}

function deleteTask(e){
  e.target.parentNode.remove()
}