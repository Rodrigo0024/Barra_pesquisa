const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];
//aprender a usar o fetch para continuar o tutorial
const URL ='https://jsonplaceholder.typicode.com/users';

inputSearch.oninput =()=>{
    content.innerHTML ="";
    items
        .filter((item)=> 
        item.toLowerCase().includes(inputSearch.value.toLocaleLowerCase())
    )
        .forEach((item)=> addHTML(item));
    
};
function addHTML(item){
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div);
}
fetch(URL).then(
    (data)=> data.json()
).then((users) => {
    users.forEach((user) => {
        addHTML(user.name);
        items.push(user.name);
    });
});