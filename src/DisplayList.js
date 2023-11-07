function Displaylist({ listName, handleDelete }) {
    return (
        <ul className='list'>
            {listName.map((name, index) => (
                <li key={index}>
                    <div>{name}</div>
                    <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default Displaylist;