let itemStyles = {
    width: '100%',
    display: 'inline-block',
    padding: '10px 100px 10px 20px',
    border: '1px solid lightGrey'
}

let activeStyles = {
    ...itemStyles,
    backgroundColor: 'blue',
    color: 'white'
}

let blockStyles = {
    width: '300px'
}

let items = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros']

let ListGroupItem = (props) => (
    <span style={props.item == items[0] ? activeStyles : itemStyles}>{props.item}</span>
);

let ListGroup = (props) => (
    <div style={blockStyles}>{props.items.map(item => <ListGroupItem item={item} />)}</div>
);


ReactDOM.render(<ListGroup items={items}/>, document.getElementById('root'))

