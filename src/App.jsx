
import Container from './container/Container';
import './assets/style.css'
import { LocalProvider } from './context/LocalContext';
import { ProductProvider } from './context/ProductContext';
import { AdminProvider } from './context/AdminContext';
import { UserProvider } from './context/UserContext';
import { BlogProvider } from './context/BlogContext';


function App() {
  return (
    <div>
      {/* <RedirectComponent /> */}
       <AdminProvider>
      <UserProvider >
      <LocalProvider >
      <ProductProvider >
     <BlogProvider >
      <Container />
      </BlogProvider>
      </ProductProvider>
      </LocalProvider>
      </UserProvider>
      </AdminProvider>
     
    </div>
  );
}

export default App;
