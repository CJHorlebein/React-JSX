let headerStyles = {
    height: '3vh',
    padding: '20px 40px',
    margin: '0',
    backgroundColor: '#555555',
    display: 'flex',
    flexDirection: 'row'
}

let navLink = {
    textDecoration: 'none',
    marginRight: '10px',
    color: '#DDDDDD'
}

let blogStyles = {
    margin: '0',
    padding: '0'
}
let articleStyles = {
    backgroundColor: '#DDDDDD',
    height: '80vh'
}

let contentStyles ={
    textAlign: 'center',
    paddingTop: '20vh'
};

let footerStyles = {
    backgroundColor: '#EEEEEE',
    height: '12vh'
};

let footerContentStyles = {
    textAlign: 'center',
    paddingTop: '2vh'
};
let Header = () => (
    <div style={headerStyles}>
            <a href='./' style={navLink}>Home</a>
            <a href='./' style={navLink}>About</a>
            <a href='./' style={navLink}>Find us</a>
    </div>
);

let Article = () => (
    <div style={articleStyles}>
        <div style={contentStyles}>
            <h1>Welcome to the site!</h1>
            <span>It's not much but it's honest work</span>
        </div>
    </div>
)

let Footer = () => (
    <div style={footerStyles}>
        <div style={footerContentStyles}>
            <span>Sponsored by literally nobody</span>
        </div>
    </div>
)

let Blog = () => (
    <div style={blogStyles}>
        <Header />
        <Article />
        <Footer />
    </div>
);


ReactDOM.render(<Blog />, document.getElementById('root'))