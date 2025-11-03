let usersPost = document.getElementById("users-post");

let query = new URLSearchParams(location.search);

let id = query.get("id");
console.log(id);


getData("posts" , (posts) => {
    console.log(posts);
    
    let res = posts.filter((el) => el.id == id);
    res.map((el) => {
        usersPost.innerHTML += `
          <div class="w-full bg-[#fff]/60 rounded-[10px] pl-[10px]">
                        <p class="text-[13px] text-[white] font-bold pt-[10px]">${el.title}</p>
                        <p class="text-[17px]">${el.body}</p>
                        <button class="mt-[20px] mb-[10px] w-[120px] h-[30px] bg-[#fff]/70 rounded-[5px]">
                            <a class="text-[white] font-bold" href="">Comments</a>
                        </button>
                    </div>
        `
    })

})

getData("posts" , (posts) => {
    console.log(posts);
    
})