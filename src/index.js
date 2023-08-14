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
let counter = 1

const projlist = {}

function fillContent(){
    let fillBox = document.createElement('div')
    fillBox.classList.add('fillBox')

    let fillText = document.createElement('p')
    fillText.textContent = 'Please select or create a list!'
    fillText.classList.add('fillText')

    let fillImg = document.createElement('img')
    fillImg.setAttribute('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e96d93fa-09e4-4718-b4ec-4f533a1f1800/d6pxlji-6843ef54-c474-4a0f-a529-f09efb6de58f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5NmQ5M2ZhLTA5ZTQtNDcxOC1iNGVjLTRmNTMzYTFmMTgwMFwvZDZweGxqaS02ODQzZWY1NC1jNDc0LTRhMGYtYTUyOS1mMDllZmI2ZGU1OGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vZywgmOkxcGAqrBNF8Iw9PrEBshiZTr4fDPj0orE9vY')
    fillImg.classList.add('fillImg')

    mainBody.appendChild(fillBox)
    fillBox.appendChild(fillText)
    fillBox.appendChild(fillImg)
}

fillContent()

//add edit button?, remove task boxes when deleting list

document.getElementById('list').addEventListener('keypress', function (e){
    if (e.key === 'Enter'){

        let input = document.getElementById('list').value
        let allList = document.querySelectorAll('.listBG')
        let allListBGBlue = document.querySelectorAll('.listBGBlue')
        let newTask = document.createElement('li')
        newTask.textContent = input
        // if(newTask.textContent === input){
        //     alert('Please give your tasks a unique name!')
        //     return
        // }

        for(let i = 0; i < allList.length;i++){
            if(input === allList[i].textContent){
                alert('Task name already exist')
                return
            }
        }

        for(let c = 0; c < allListBGBlue.length;c++){
            if(input === allListBGBlue[c].textContent){
                alert('Task name already exist')
                return
            }
        }

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
//fix this shit?
            document.querySelectorAll('.taskBox').forEach(e => e.remove());
            let allPlus = document.querySelectorAll('.plus')
            
            createTask()
            
            if(allPlus.length >= 1){
                return
            } else {

            pluss = document.createElement('IMG')
            pluss.setAttribute('src','https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png')
            pluss.classList.add('plus')

            mainBody.appendChild(pluss)
            }

            pluss.addEventListener('click', function(){
                openModal()
            })
    
            closeModalButton.addEventListener('click', function(){
                closeModal()
            })

            taskName.textContent = newTask.textContent
            topT = newTask.textContent

            // console.log(projlist[test])
            document.querySelector('.fillBox').remove()
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

            let dltBox = document.querySelectorAll('.taskBox');
            for(let i = 0; i < dltBox.length; i++)
            if(dltBox.length < 1){
             return
            } else {
             dltBox[i].remove()
            }
            // dltBox[0].remove()
        })
        
}   
        
})

deleteBtn.addEventListener('click', function(){
    fillContent()
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

        dlt.addEventListener('click', function(){
            taskBox.remove()
            let fSib = dlt.parentNode.childNodes[0].textContent

            for(let i = 0; i < projlist[test].length; i++){
                if(fSib === projlist[test][i].taskName){
                    projlist[test].splice(i,1)
                    console.log(projlist[test])
                }
            }
            // delete cTask[c]
            // const newArray = projlist[test].filter(element => {
            //     if (Object.keys(element).length !== 0){
            //         return true
            //     }
            //     return false
            // })
            // projlist[test].splice(0,projlist[test].length, newArray)

            // projlist[test].slice([c],0)

            // console.log(cTask)
            // console.log(projlist[test])
            
            // for( x = 0; x < projlist[test].length; x++){
            //     console.log(projlist[test](e).taskName)
            //     let name = projlist[test].taskName
            //     if(name === projlist[test].taskName){
            //      delete projlist[test]
            //     }
            // }
            
            // if(projlist[test].length === 1){
            //     projlist[test].splice(0,1)
            // } else {
            // projlist[test].splice(e,1)
            // }
            // console.log(projlist[test])
        })

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
//match objectkey with box task title to return index
    dlt.addEventListener('click', function(){
        taskBox.remove()
        
        let fSib = dlt.parentNode.childNodes[0].textContent

        for(let i = 0; i < projlist[test].length; i++){
            if(fSib === projlist[test][i].taskName){
                projlist[test].splice(i,1)
                console.log(projlist[test])
            }
        }
        
        // let tNamez = document.querySelectorAll('.taskTitle');
        // for(let i = 0; i < tNamez.length; i++){
        //     if(tNamez[i] != projlist[test][i].taskName){
        //         console.log(projlist[test])
        //     }

        // }
            // for(let c = 0; c < projlist[test].length; c++){
            //     if(tNamez != projlist[test][c].taskName){
            //         console.log('working!')
            //         // console.log(tNamez[i].innerHTML)
            //         // console.log(projlist[test][c].taskName)
            //     }
            // }
        


        // let textTest = tNamez.value
        // console.log(tNamez.length)
        // for(let i = 0; i < projlist[test].length; i++){
        //     for(let x = 0; x < Object.keys(projlist[test]).length; x++){
        //         if(textTest === Object.keys(projlist[test]).taskName){
        //             projlist[test].splice(x,1)
        //         }
        //     }
        // }
            // let allKeys = Object.keys(projlist[test])

            // if(allKeys)

            // let found = projlist[test].findIndex((listTaskName => listTaskName.allKeys === tNamez))
            // console.log(found)
        

        // const newArray = projlist[test].filter(element => {
        //     if (Object.keys(element).length !== 0){
        //         return true
        //     }
        //     return false
        // })
        // projlist[test].splice(0,projlist[test].length, newArray)
             // console.log(projlist[test])
        // projlist[test].slice([c],0)
        // console.log(cTask)
        // console.log(projlist[test])
        
        // for( x = 0; x < projlist[test].length; x++){
        //     console.log(projlist[test](e).taskName)
        //     let name = projlist[test].taskName
        //     if(name === projlist[test].taskName){
        //      delete projlist[test]
        //     }
        // }
        
        // if(projlist[test].length === 1){
        //     projlist[test].splice(0,1)
        // } else {
        // projlist[test].splice(e,1)
        // }
        // console.log(projlist[test])
        
    })
}
}

