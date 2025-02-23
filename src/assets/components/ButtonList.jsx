import { useState } from "react";
import Button from "../components/Button";

const languages = [
  { id: 1, title: "HTML", description: "HTML è il linguaggio per creare pagine web." },
  { id: 2, title: "CSS", description: "CSS controlla lo stile e il layout delle pagine web." },
  { id: 3, title: "JavaScript", description: "JavaScript aggiunge interattività ai siti web." },
  { id: 4, title: "Node.js", description: "Node.js esegue JavaScript lato server." },
  { id: 5, title: "Express", description: "Express è un framework per Node.js per creare API." },
  { id: 6, title: "ReactJS", description: "ReactJS è una libreria per creare interfacce utente." }
];

function ButtonList() {
  const [selectedDesc, setSelectedDesc] = useState("");

  return (
    <>
     
      <div className="Button_div">
        {
          languages.map((element) => (
            <Button 
              key={element.id} 
              lang={element}  
              onClick={() => setSelectedDesc({title: element.title, description: element.description})} 
            />
          ))
        }
      </div>

      {selectedDesc && (
        <div className="description">
        <h3>{selectedDesc.title}</h3>  
        <p>{selectedDesc.description}</p>
      </div>
      )}
    </>
  );
}

export default ButtonList;

  