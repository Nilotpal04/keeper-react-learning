import Header from "./components/header";
import Note from "./components/note";
import Footer from "./components/footer";
import CreateArea from "./components/createtextarea";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  function addItem(fullData) {
    setData((prev) => [...prev, fullData]);
  }

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
