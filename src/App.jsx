import Header from "./components/header";
import Note from "./components/note";
import Footer from "./components/footer";
import CreateArea from "./components/createtextarea";
import { useState } from "react";
import {useEffect} from "react";

function App() {

  const [data, setData] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addItem(fullData) {
    setData((prev) => [...prev, fullData]);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  function delBtn(id) {
    setData((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {data.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.note}
          onChecked={delBtn}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
