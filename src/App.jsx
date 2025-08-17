import ProductList from "./components/productList";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <main>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </main>
  );
}

export default App;
