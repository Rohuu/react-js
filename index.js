// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"));

// create a heading using reactJS
// Note: h1 is not mentioned in HTML
// manipulating it using JS-React

// const headerEl = document.getElementById("header");
// headerEl.textContent="This is an imperative way to program";
// header.className="header";
// document.getElementById("root").append(headerEl);

//JSX :- javascript xml  

ReactDOM.render(
    <div>
        <h1 className="main-heading"> Hi, There!</h1>
        <p>This is a paragraph!</p>
    </div>
    ,document.getElementById("root")
);

// or we can extract that html in a separeate variable also

const page=(
    <div>
        <h1 className="second-heading"> Hi there, second time!</h1>
        <p>This is another paragraph!</p>
    </div>
)

ReactDOM.render(page,document.getElementById("another-root"));



const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("navbar-el"))
