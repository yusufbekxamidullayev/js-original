let usersPosts = document.getElementById("users-post");

let query = new URLSearchParams(location.search);

let id = query.get("userId");
console.log(id);


getData("posts" , (posts) => {
    console.log(posts);
    
    let res = posts.filter((el) => el.userId == id);
    res.map((post) => {        
        usersPosts.innerHTML += `
                    <div class="w-full bg-[#fff]/60 rounded-[10px] pl-[10px]">
                        <p class="text-[13px] text-[white] font-bold pt-[10px]">${post.title}</p>
                        <p class="text-[17px]">${post.body}</p>
                        <button class="mt-[20px] mb-[10px] w-[120px] h-[30px] bg-[#fff]/70 rounded-[5px]">
                            <a class="text-[white] font-bold hover:text-[gray]" href="../comments.html?postId=${post.id}">Comments</a>
                        </button>
                    </div>
        `
    })

})

getData("posts" , (posts) => {
    console.log(posts);
    
})