import './App.css';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
import { AddPet } from './ui-components';
 

 function App() {
  const navbarOverrides = { 
    image: { src: "https://img.icons8.com/color/50/000000/cat" },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => alert("Add Pet"),
    }
  };
   return (
     <div className="App">
        <NavBar width={"100%"} overrides={navbarOverrides} />
          <header className="App-header">
          <AddPet />
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
