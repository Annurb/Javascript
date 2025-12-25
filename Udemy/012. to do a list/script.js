let input = prompt("What would you like to do? ");
const todos = ['Collect Chicken Eggs ', 'Clean Litter box' ]
while(input !== "quit" && input !== "q"){
    if(input === 'list'){
        console.log("***************")
        for(let i = 0; i< todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
            
        }
        console.log("***************")
    }else if(input === 'new'){
        const newTodo = prompt("Ok, whats the new todo? ")
        todos.push(newTodo)
        console.log(`${newTodo} added to the list!`)
    }
    else if(input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted}`)
        }
        else{
            console.log("Unknow index")
        }
    }
    input = prompt("What would you like to do? ");
}
alert("Ok, you quit the app! ")