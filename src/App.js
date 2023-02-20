import './App.css';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
import { AddPet } from './ui-components';
import { useState } from 'react';
import { PetDetails } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from "@aws-amplify/storage"
 
 function App({ user, signOut }) {
  async function saveFile() {
    await Storage.put("test.txt", "Hello");
  }
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");

  const formOverride = {
    TextField29766922: {
      placeholder: name
    },
    TextField36552705: {
      placeholder: breed
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766925: {
      placeholder: image
    },
    TextField29766926: {
      placeholder: about
    },
    TextField29766927: {
      placeholder: color
    },
    Button29766926: {
      isDisabled: updatePet ? false : true,
      },
      Button36552727: {
        isDisabled: updatePet ? true : false,
      },
    Icon: {
      onClick: () => {
        setShowForm(false);
        setShowDetails(false);
      },
      style: {
        cursor: "pointer",
      },
    },
  };

  const navbarOverrides = { 
    image: { src: "https://img.icons8.com/color/50/000000/cat" },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm);
        saveFile();
      },
    },
    Button: {
      onClick: signOut,
      },
      // add name of user to navbar
      "Hello,": {
        children: user.username,
      },
    };

   return (
     <div className="App">
        <NavBar width={"100%"} overrides={navbarOverrides} />
          <header className="App-header">
          { showDetails && <PetDetails 
          overrides={formOverride}
          pet={pet} 
          style={{
              textAlign: "left",
              margin: '1rem'
            }}
          />}
          { showForm && (
            <AddPet 
            pet={updatePet}
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: '1rem'
            }} />
          )}
            <Pets 
            overrideItems={({ item, index }) => ({
              overrides: {
                Breed: { color: "green" },
                Button29766907: {
                  onClick: () => {
                    setShowDetails(!showDetails);
                    setPet(item);
                  },
                },
                Button36492689: {
                  onClick: () => {
                    if (!showForm) setShowForm(true);
                    setUpdatePet(item);
                    setName(item.name);
                    setBreed(item.breed);
                    setAge(item.age);
                    setImage(item.image);
                    setAbout(item.about);
                    setColor(item.color);
                  },
              },
            },
          })}
            />          
          </header>
        <Footer width={"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
