function CreateArea(){
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" />
                <textarea name="note" placeholder="Take a note..." id=""></textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;