// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     },3000);
// }
// getData();

//await - ?


//fetch API -> 



//async function getData(){

    //get request marni h -> async  
   // let response = await fetch('https://leetcode.com/problem-list/stack/posts/1') //await marks se yeh sync ki tarah behave karega posts is a resource (data collection) on the server.
//   it il return something like this  [
//  { "id": 1, "title": "..."},
//  { "id": 2, "title": "..."}
// ]

    //parse json -> await
//     let data = await response.json();
//     console.log( response );

// }
// getData();

//scenerio;
//prepare url / api endpoint -> sync
//fetch data -> network call -> async category  => agar m isse await marks kar du toh hoga yeh m ispe ruk jaugi jb tk mera data na aaye tb tk m aage wala code execute nhi karaugi..kyuki network call hui h data ko aane m time lgega aur jb tk dfata nhi aayega tb tk next line execute nhi hogi.
//process data -> sync   





// Step 1: Create headers
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Step 2: API URL
const url = "https://jsonplaceholder.typicode.com/posts";

// Step 3: Options for POST request
const options = {
    method: "POST",
    body: JSON.stringify({
        username: "love babbars"
    }),
    headers: myHeaders,
};

async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response:", data);
}


// Step 4: Async function
async function postData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("post data response:", data);
}

async function processData(){
await postData();
await getData();
}
processData();
// Step 5: Call function
