let styles = { 
    display: 'inline-block',
    width: '100px', 
    height: '100px', 
    margin: '5px'
};

let Box = () => (
    <div>
        <div>
            <Square color={'#F14F21'} />
            <Square color={'#7EB900'} />
        </div>
        <div>
            <Square color={'#01A3EE'} />
            <Square color={'#FEB700'} />
        </div>
    </div>
);

let Square = props => <div style={{...styles, backgroundColor:props.color}}></div>;

ReactDOM.render(<Box />, document.getElementById('root'));
