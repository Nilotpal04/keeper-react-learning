import Header from "./components/header";
import Note from "./components/note";
import Footer from "./components/footer";
import notes from "./notes"
import CreateArea from "./components/createtextarea"

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem) => ( <Note 
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
