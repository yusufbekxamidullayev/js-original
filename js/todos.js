let todosContent = document.getElementById("users-todos");

let query = new URLSearchParams(location.search);

let id = query.get("userId");
console.log(id);

getData("todos", (todos) => {
    todosContent.innerHTML = "";
    let res = todos.filter((el) => el.userId === +id);
    console.log(res);


    res.map((todos) => {
        todosContent.innerHTML += `
      <div class="w-full h-[60px] bg-[#fff]/60 flex items-center justify-between pr-[10px] rounded-[10px] pl-[10px]">
            <h1 class="text-[18px]">${todos.title}</h1>
            ${todos.completed ? '✔️' : '❌'
            }
        </div>
    `
    });
});