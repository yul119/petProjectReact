import './App.css';
// import Reviews from './reviews.components/Reviews';
// import Reviews from './reviews2.components/Reviews';
// import Menu from './menu.components/Menu';
// import Menu from './menuFetchData.components/Menu';
// import Colors from './searchColor.components/Colors';
// import TodoApp from './todolist.components/TodoApp';
import TodoApp from './todolistUseContext.components/TodoApp';
import TodosProvider from './todolistUseContext.components/todosContext'

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;
