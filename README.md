A dashboard is a common type of user interface used to show a variety of information that is important in making decisions. It is usually read only which is perfect for practicing redux reducers. The data is currently being passed to components through props. Change the code to implement redux and remove any passing of props.


### Reducers
X Create a new folder called reducers
X Create a file in this folder called index.js
X Import combineReducers from redux
X Create a reducer function for each piece of data in state.js
  * newComments
  * newTasks
  * newOrders
  * tickets
  * orders
  * tasks
  * messages
X Remember 2 parameters state and action. Remember to return state
X Combine the reducers and export



### Create Database
X Create a store.js file
X Import createStore from redux
X Import state from state.js
X Import reducers from reducers/index
X Create the store and export it

### Provide store to components
* In index.js
X Import Provider from react-redux
X Import store from store.js
X Use Provider component to wrap App
X Give Provider a prop “store” and the value of the store

### Create Containers

### ONLY make these components into Containers
* A B Tickets (use as example) (tickets)
* A B TransactionPanel (orders)
* A B TopNav (messages)
* A B TasksPanel (tasks)
* A B Comments (newComments)
* A B Orders (newOrders)
* A B Tasks (newTasks)

### Think - Why do the other components not care about the database such that we don't need to make them Containers??

### IN Containers
* In each Container:
* A. Import connect from react-redux
* B. Create a function called mapStateToProps that takes parameter state
*   Return an object.

    C. Decide what prop the component needs and this will be a key on the object

    D. Decide what data from state the component needs and that will be the value on the object

X Use the connect function and mapStateToProps to turn the component into a container

X Export the container

### Fix
* In App.js
  X remove the props parameter
  X and all instances of passing props

  * In index.js
  X remove all instances of state
  X and passing props to App

--> WHAT ABOUT DATETIME? and TASK ITEM?
