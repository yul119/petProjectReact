import './App.css';
// import Reviews from './reviews.components/Reviews'; pp1
// import Reviews from './reviews2.components/Reviews'; pp2
// import Menu from './menu.components/Menu'; pp3
// import Menu from './menuFetchData.components/Menu'; pp4
// import Colors from './searchColor.components/Colors'; pp5
// import TodoApp from './todolist.components/TodoApp'; pp6
// import TodoApp from './todolistUseContext.components/TodoApp'; pp7
// import TodosProvider from './todolistUseContext.components/todosContext'
import Carts from './carts.components/Carts';
import CartProvider from './carts.components/context';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Carts />
      </CartProvider>
      
    </div>
  );
}

export default App;
