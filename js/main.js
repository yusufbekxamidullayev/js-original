let usersContent = document.getElementById("users-content");

getData("users" , (users) => {
    users.map((el) => {
        usersContent.innerHTML += `
           <div id="user-card" class="w-[310px]  border-[1px] border-white rounded-[20px] bg-[#fff]/30  pl-[10px] pt-[5px]">
                    <h1 class="text-[22px] font-bold">${el.name}</h1>
                    <h2 class="text-[18px] text-[white] font-bold">${el.username}</h2>
                    <div class="flex flex-col gap-[5px]">
                        <p class="text-[17px]">Email: ${el.email}</p>
                        <p class="text-[17px]">Website: ${el.website}</p>
                        <p class="text-[17px]">Address: ${el.address.city}</p>
                        <p class="text-[17px]">Phone: ${el.phone}</p>
                    </div>
                    <div class="flex items-center justify-between px-[7px] mt-[10px] pb-[10px]">
                        <button class="w-[85px] h-[35px] rounded-[5px] bg-[#fff]/60">
                            <a class="text-[orange]" href="../todos.html?userId=${el.id}">Todos</a>
                        </button>
                        <button class="w-[85px] h-[35px] rounded-[5px] bg-[#fff]/60">
                            <a class="text-[orange]" href="./posts.html?userId=${el.id}">Posts</a>
                        </button>
                        <button class="w-[75px] h-[35px] rounded-[5px] bg-[#fff]/60">
                            <a class="text-[orange]" href="../gallery.html?userId=${el.id}">Gallery</a>
                        </button>
                    </div>
                </div>
        `
    })
});


