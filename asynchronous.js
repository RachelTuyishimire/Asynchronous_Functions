// Question One
// Write an asynchronous function that accepts a message string and 
// a delay time in milliseconds. The function should log the message 
// to the console after the specified delay time.

async function showMessage(message, delay){
    let getMessage = await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message)
}
showMessage("Welcome to Adalab", 3000);

// Question Two
// You have an array of user IDs and a function getUserData(id) that 
// returns a Promise with user data when given a user ID. Write an 
// asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

 async function fetchUserData(userIds) {
      for (const id of userIds) {
        try {
          const userData = await getUserData(id);
          console.log(userData);
        } catch (error) {
          console.error(`Failed to fetch user data for ID ${id}:`, error);
        }
      }
    }
  let userIds = [015, 001, 056, 076];
  fetchUserData();
  

// Question Three
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if 
// the task is successful, and a custom error message if there's an error.
async function performTask(){
  try{
    await performTask();
    console.log("Task completd successfully");
  }
  catch (error){
    console.log ("Error performing task:", error);
  }
}
performTask();