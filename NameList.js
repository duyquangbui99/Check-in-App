function NameList({ handleSubmit, newName, setNewItem }) {
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className='form-row'>
                <label htmlFor='item'>Name</label>
                <input value={newName} onChange={e => setNewItem(e.target.value)} type="text" id='item' />
                <button className='btn'>Add</button>
            </div>
        </form>
    );
}
export default NameList;