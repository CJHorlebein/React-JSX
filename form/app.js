let boxStyles = {
    width: '200px',
    boxShadow: '0 2px 2px 0 lightGrey',
    margin: '5px 20px'
};

let btn = {
    width: '200px',
    margin: '5px 20px',
    backgroundColor: 'orange',
    fontSize: '16px',
    borderRadius: '10px',
    boxShadow: '0 2px 2px 0 lightGrey'
}

let radioButtons ={
    margin: '5px 20px'
}

let TextInput = (prop) => (
    <div>
        <label for='formAnswer1'>{prop.item}</label>
        <input style={boxStyles} type="text" />
    </div>
)

let YesNoRadio = () => (
    <div style={radioButtons}>
        <input type='radio' id='formAnswer' name='yesClick' value='true' />
        <label style = {{marginRight: '10px'}} for='formAnswer1'>Yes</label>
        <input type='radio' id='formAnswer' name='noClick' value='false' />
        <label for='formAnswer2'>No</label>
    </div>
);


let SubmitButton = () => <div><button style = {btn} type="submit">Submit</button></div>;

let Form = () => (
    <form>
        <TextInput item="name"/>
        <TextInput item="email"/>
        <YesNoRadio />
        <SubmitButton />
    </form>
)


ReactDOM.render(<Form />, document.getElementById('root'))
