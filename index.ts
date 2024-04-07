#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n \t WELCOME TO MUHAMMAD UMAR'S TODOLIST-APP\n"));


let todo_List: any[]=[];
let conditions=true;

let main=async () => {
    while(conditions){
          let option=await inquirer.prompt([{

               name:"choice",
               type:"list",
               message:chalk.green("Select an option you want to do:"),
               choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
          }]);

          if (option.choice==="Add Task") {
            await addTask()
          }

         else if(option.choice==="Delete Task"){
              await deletetask()
         }

         else if(option.choice==="Update Task"){
               await updateTask()
         }

          else if(option.choice==="View Todo-List"){
               await viewTask()
          }

          else if(option.choice==="Exit"){
               conditions=false;
          }
    }
}

//Function to add new task to the list.
let addTask =async () => {
    let newTask=await inquirer.prompt([{

        name:"task",
        type:"input",
        message:"Enter your new task:",
    }]);

    todo_List.push(newTask.task);
    console.log(chalk.yellow(`\n ${newTask.task} task added successfully in the todo-list!`));
};

  //Function to view all Todo-list Tasks.
  let viewTask = () => {
    
    console.log("\n Your View Todo-list: \n");
    todo_List.forEach((task, index) => { 
        console.log(`${index+1}: ${task}`);
         }  
    )}
        
    //Function to delete a task from list.

    let deletetask= async() => {
        await viewTask()

        let taskindex=await inquirer.prompt([{

            name:"index",
            type:"number",
            message: chalk.red("Enter the 'index no.' of the task you want to delete from the list:"),
        }]);

        let deletedtask=todo_List.splice(taskindex.index-1,1);
        console.log(chalk.grey(`\n ${deletedtask} task has been deleted successfully from your todo-list!`));
       
    }

    //Function to update a task.
    let updateTask=async () => {

        await viewTask()
        let update_task_index=await inquirer.prompt([{

            name:"index",
            type:"number",
            message:chalk.green("Enter the 'index no' of the task you want to update:"),
        },

        {
            name:"new_task",
            type:"input",
            message:chalk.green(" Now! Enter new task name: "),

        }
    
    ]);

    todo_List[update_task_index.index - 1]=update_task_index.new_task;
    console.log(chalk.yellow(`Task at index no ${update_task_index.index - 1} updated successfully [for updated list check option:"View Todo-List"]`));
    
    }

main();
        
