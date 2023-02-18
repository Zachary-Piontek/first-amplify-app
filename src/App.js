import './App.css';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
 
 function App() {

   return (
     <div className="App">
        <NavBar width={"100%"}/>
          <header className="App-header">
            <Pets 
            overrideItems={({ item, index }) => ({
              overrides: {
                Breed: { color: "green" },
                Button29766907: { onClick: () => alert(item.id) },
              },
            })} 
            />          
          </header>
        <Footer width={"100%"}/>
    </div>
  );
}

export default App;
