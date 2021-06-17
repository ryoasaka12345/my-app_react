import './List.css';

function List(props) {
    // props.children get all passed elemtns from parent component
    return <div className="list">{props.children}</div>
}

export default List;
