let picStyles = {
    width: '150px',
    height: '150px',
    borderRadius: "10px",
};

let commentStyles = {
    display: 'flex',
    width: '500px',
    backgroundColor: '#CCCCCC',
    padding: '5px 10px',
    margin: '10px 0px',
    borderRadius: '10px',
};

let textStyles = {
    display: 'inline-block',
    padding: '20px 10px',
    fontSize: '18px'
};

let nameStyles = {
    display: 'inline-block',
    padding: '2px 10px'
};

let posts = [
    {
        user: 'Oscar',
        pic:
            'https://c402277.ssl.cf1.rackcdn.com/photos/6518/images/story_full_width/iStock_000011145477Large_mini_%281%29.jpg?1394632882',
        comment: "It's a sloth kind of day."
    },
    {
        user: 'Chad',
        pic: 'https://media.mnn.com/assets/images/2018/04/LItSL_4.jpg.990x0_q80_crop-smart.jpg',
        comment: 'Leg day? Never heard of it.'
    },
    {
        user: 'Steve',
        pic:
            'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/539787-istock-531256760.jpg?itok=GqG3iYng&resize=1100x1100',
        comment: "What's ya thinking about? Sloth stuff."
    }
];

let ProfilePic = (prop) => (
    <div>
        <div>
            <span style={nameStyles}>{prop.info.user}</span>
        </div>
        <div>
            <img style={picStyles} alt='picture of me' src={prop.info.pic} />
        </div>
    </div>
);

let ProfileComment = (prop) => <div><span style={textStyles} >{prop.comment}</span></div>;

let CommentBody = (props) => (
    <div style = {commentStyles}>
        <ProfilePic info={props.user} />
        <ProfileComment comment={props.user.comment} />
    </div>
);

let Comments = (props) => props.posts.map( post => <CommentBody user={post} />);


ReactDOM.render(<Comments posts={posts}/>, document.getElementById('root'))