import {useState} from "react";

function CreateArea({onAdd}){
    const [fullData, setFullData] = useState({
        title: "",
        note: ""
    });

    function handleChange(event){
        const {value, name} = event.target;

        setFullData(preeValue => {
            if (name === "title"){
                return {
                    title: value,
                    note: preeValue.note
                }
            } else if (name === "note"){
                return {
                    title: preeValue.title,
                    note: value
                }
            }
        })
    }

    function submitBtn(e){
        e.preventDefault();
        onAdd(fullData)
        setFullData({
            title: "",
            note: ""
        })
    }

    return (
        <div>
            <form onSubmit={submitBtn}>
                <input onChange={handleChange} name="title" placeholder="Title" value={fullData.title} />
                <textarea onChange={handleChange} name="note" placeholder="Take a note..." value={fullData.note}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateArea;