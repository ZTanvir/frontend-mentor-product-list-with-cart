import ProductList from "./components/productList";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <main>
      <ProductProvider>
        <CartProvider>
          <ProductList />
        </CartProvider>
      </ProductProvider>
    </main>
  );
}

export default App;
