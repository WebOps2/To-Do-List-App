
class todo{
    constructor(addButton, text,){
        this.addButton = addButton
        this.text = text 
        this.addButton.addEventListener('click',this.todoInput)

    }

    todoInput = ()=>{
        if(this.addButton.innerText === 'Add'){
            if(this.text.value !== ''){
                this.addToDo(this.text.value)
                this.text.value = ''
            }
            else{
                alert('Error')
            }
        }
        else{
            this.update(this.text.value)
            this.addButton.innerText = 'Add'
            this.addButton.classList.remove('btn-warning')
            this.addButton.classList.add('btn-primary')
            document.querySelector('textarea').value = ''

        }
    }

    addToDo = (input)=>{
        this.item = document.createElement('div')
         this.item.classList.add('item')

        this.span = document.createElement('span')
        this.span.innerText = input
       
        this.item.appendChild(this.span)
        if(this.span.innerText.length > 70){
            alert('error')
        }
        else{
            this.parent1 = document.createElement('div')
            this.deleteIcon = document.createElement('i')
            this.deleteIcon.classList.add('fas')
            this.deleteIcon.classList.add('fa-trash-alt')
            this.deleteIcon.classList.add('fa-1x')
            this.deleteIcon.classList.add('bin')
            this.parent1.appendChild(this.deleteIcon)
            this.deleteIcon.addEventListener('click', this.deleteButton)
    
            this.parent2 = document.createElement('div')
            this.editIcon = document.createElement('i')
            this.editIcon.classList.add('fas')
            this.editIcon.classList.add('fa-pencil-alt')
            this.editIcon.classList.add('fa-1x')
            this.editIcon.classList.add('text-primary')
            this.editIcon.addEventListener('click', function(){
                document.querySelector('textarea').value= input
                addButton.innerText = 'Update'
                addButton.classList.add('btn-warning')
            })
            this.parent2.appendChild(this.editIcon)
    
    
            this.item.appendChild(this.parent1)
            this.item.appendChild(this.parent2)
    
            this.todos = document.querySelector('#todos')
            this.todos.appendChild(this.item)
        }
    
     
        }

        update = (newText)=>{
            this.span.innerText = newText;
        }
    
        deleteButton = ()=>{
            this.item.remove()
        }

        

}



const ad = document.getElementById('addButton')
const text = document.querySelector('textarea')

const btn = new todo(ad, text)
