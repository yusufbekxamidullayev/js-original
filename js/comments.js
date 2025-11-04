let postComment = document.getElementById("post-comment");

let query = new URLSearchParams(location.search);

let id = query.get("postId");
console.log(id);

getData("comments", (comments) => {
    console.log(comments);

    let res = comments.filter((el) => el.postId === +id)
    console.log(res);

    res.map((el) => {
        postComment.innerHTML += `
          <div class="w-full rounded-[5px] bg-[#fff]/60 pl-[15px] pt-[10px] pb-[10px]">
                <h1 class="text-[orange] text-[18px]">${el.email}</h1>
                <p class="text-[white] text-[13px] font-bold">${el.name}</p>
                <p>${el.body}</p>
            </div>
        `
    })
})