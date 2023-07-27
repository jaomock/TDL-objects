/*const { library } = require("webpack")

const { ModuleGraph } = require("webpack") */

let fullList = document.querySelector('.taskInput')
let newList = document.querySelectorAll('#lizt')
let deleteBtn = document.querySelector('#delete')
let mainBody = document.querySelector('.main')
let closeModalButton = document.querySelector('#closeBtn')
let modal = document.querySelector('.modal')
let taskName = document.querySelector('#taskName')
let enterTask = document.querySelector('.list')
let submit = document.querySelector('#submit');
let topBar = document.querySelector('.topBar');
let tboxz = document.querySelectorAll('.taskBox')

let test = ''
let topT = ''

const projlist = {}

document.getElementById('list').addEventListener('keypress', function (e){
    if (e.key === 'Enter'){

        let input = document.getElementById('list').value
        let newTask = document.createElement('li')
        newTask.textContent = input
        /*newList.classList.add('lizt')*/
        newTask.value = input
        newTask.classList.add('listBG')
        fullList.appendChild(newTask) 
        enterTask.value = ''

        projlist[`${input}`] = []

        let allTask = document.querySelectorAll('li');

        for(let i = 0; i < allTask.length; i++){
            allTask[i].onclick = function (){
                let c = 0;
                while (c < allTask.length) {
                    allTask[c++].className = 'listBG'
                }
                allTask[i].className = 'listBGBlue';
                test = allTask[i].textContent;
            }
        }

/*remove pluss*/

        newTask.addEventListener('click', function(){
            console.log(projlist)
            document.querySelectorAll('.taskBox').forEach(e => e.remove());

            pluss = document.createElement('IMG')
            pluss.setAttribute('src','https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png')
            pluss.classList.add('plus')

            mainBody.appendChild(pluss)

            pluss.addEventListener('click', function(){
                openModal()
            })
    
            closeModalButton.addEventListener('click', function(){
                closeModal()
            })

            taskName.textContent = newTask.textContent
            topT = newTask.textContent

            createTask()
        })

        deleteBtn.addEventListener('click', function(){
            for(let i = 0; i<allTask.length;i++){
                if(allTask[i].classList.contains('listBGBlue')){
                    allTask[i].remove()
                }
                if(allTask.length == 1){
                    pluss.remove()
                }
            }

            delete projlist[test];
            taskName.textContent = ''

        })
        
}   
        
})

//

function closeModal(){
    modal.classList.remove('active')
}

function openModal(){
    modal.classList.add('active')
}

submit.addEventListener('click', function(){
    let nTask = document.querySelector('#nt');
    let nDate = document.querySelector('#nd');
    let prio = document.querySelector('#np');
    
let nt = nTask.value
let nd = nDate.value
let pr = prio.value

let plLength = Object.keys(projlist).length;
let plLoop = Object.keys(projlist);

for(let i = 0; i < plLength; i++){
if(plLoop[i] === test ){
    let cTask = projlist[test]
    task1 = {taskName:nt,date:nd,priority:pr};
    cTask.push(task1)

    for(let c = cTask.length - 1; c < cTask.length; c++){
        let taskBox = document.createElement('div')
        taskBox.classList.add('taskBox')

        let namee = document.createElement('p')
        let datee = document.createElement('p')
        let priority = document.createElement('p')
        let circle = document.createElement('div')
        let edit = document.createElement('img')
        let dlt = document.createElement('img')

        namee.textContent = cTask[c].taskName;
        datee.textContent = cTask[c].date;
        priority.textContent = cTask[c].priority;
        edit.setAttribute('src','https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png')
        dlt.setAttribute('src', 'https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png')

        namee.classList.add('taskTitle')
        datee.classList.add('taskDate')
        priority.classList.add('priority')
        circle.classList.add('circle')
        edit.classList.add('edit')
        dlt.classList.add('dlt')

        mainBody.appendChild(taskBox)
        taskBox.appendChild(namee)
        taskBox.appendChild(datee)
        taskBox.appendChild(priority)
        taskBox.appendChild(circle)
        taskBox.appendChild(edit)
        taskBox.appendChild(dlt)

        nTask.value = ''
        nDate.value = 'dd/mm/yyyy'
        prio.value = 'Low'

        circle.addEventListener('click', function(){
            if(circle.classList.contains('circle')){
                circle.classList.remove('circle')
                circle.classList.add('gcircle')
                taskBox.style.textDecoration = 'line-through'
                taskBox.style.color = "#a19f9f"
            } else if(circle.classList.contains('gcircle')){
                circle.classList.remove('gcircle')
                circle.classList.add('circle')
                taskBox.style.textDecoration = ''
                taskBox.style.color = "black"
            }
        })
      }
}   
}

closeModal()
})

function createTask(){
    for(let i = 0; i < projlist[test].length; i++){

    let taskBox = document.createElement('div')
    taskBox.classList.add('taskBox')

    let namee = document.createElement('p')
    let datee = document.createElement('p')
    let priority = document.createElement('p')
    let circle = document.createElement('div')
    let edit = document.createElement('img')
    let dlt = document.createElement('img')

    namee.textContent = projlist[test][i].taskName;
    datee.textContent = projlist[test][i].date;
    priority.textContent = projlist[test][i].priority;
    edit.setAttribute('src','https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png')
    dlt.setAttribute('src', 'https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png')

    namee.classList.add('taskTitle')
    datee.classList.add('taskDate')
    priority.classList.add('priority')
    circle.classList.add('circle')
    edit.classList.add('edit')
    dlt.classList.add('dlt')

    mainBody.appendChild(taskBox)
    taskBox.appendChild(namee)
    taskBox.appendChild(datee)
    taskBox.appendChild(priority)
    taskBox.appendChild(circle)
    taskBox.appendChild(edit)
    taskBox.appendChild(dlt)

    circle.addEventListener('click', function(){
        if(circle.classList.contains('circle')){
            circle.classList.remove('circle')
            circle.classList.add('gcircle')
            taskBox.style.textDecoration = 'line-through'
            taskBox.style.color = "#a19f9f"
        } else if(circle.classList.contains('gcircle')){
            circle.classList.remove('gcircle')
            circle.classList.add('circle')
            taskBox.style.textDecoration = ''
            taskBox.style.color = "black"
        }
    })
}
}

