fetch("https://lsonplaceholder.typicode.com/todos")
.then((Response) => Response.join())
.then((data => {
    let simlified = data.map(item) ={
        id : item.id ,
        title : item.title
    }
}))

let simlified = data.array.forEach(element => {
    console.log(`id: ${item.id},title:{item.title}`);
})
.catch ((error) => {
    console.error("error fetching data :",error);
});
