import './App.css';
import { CocktailsProvider } from './Cocktails.components/context';
// import Reviews from './reviews.components/Reviews'; 
// import Reviews2 from './reviews2.components/Reviews'; 
// import Menu from './menu.components/Menu'; 
// import Menu2 from './menuFetchData.components/Menu'; 
// import Colors from './searchColor.components/Colors'; 
// import TodoApp from './todolist.components/TodoApp'; 
// import TodoApp2 from './todolistUseContext.components/TodoApp'; 
// import TodosProvider from './todolistUseContext.components/todosContext'
// import Carts from './carts.components/Carts';
// import CartProvider from './carts.components/context';

import Main from './Cocktails.components/Main';


function App() {
  return (
    <div className="App">
      {/* <Reviews />
      <Reviews2 />
      <Menu />
      <Menu2 />
      <Colors />
      <TodoApp />
      <TodosProvider><TodoApp2 /></TodosProvider>
      <CartProvider><Carts /></CartProvider> */}
      <CocktailsProvider><Main /></CocktailsProvider>
    </div>
  );
}

export default App;
