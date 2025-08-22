import ProductList from "./components/productList";
import Cart from "./components/cart";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <main>
          <ProductList />
          <Cart />
        </main>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
