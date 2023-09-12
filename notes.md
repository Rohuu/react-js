### React Notes

WHY REACT: 
-> React is declarative: "just tell me what to do, I'll worry about how I get it done "

ReactDOM.render(HTML_CODE, where to render);

ex: ReactDOM.render(<h1>Hello</h1>), document.getElementById("root");

* JSX returns plain javascript objects

Use of Arrays.map() :

const nums=[1,2,3,4,5];
return [1,4,9,16,25];

const squredArr = nums.map(function(num){
    return num*num;
});

that squredArr array will hold all squrred values. 

const names=["rohit","sachin","dolly"];
return ["Rohit","Sachin","Dolly"];

const capitalFirstLetterArr = names.map((names) => {     //here arrow function has been used
    return name[0].toUpperCase()+name.slice[1];
})

