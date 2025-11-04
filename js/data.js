function getData(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open("get", `https://jsonplaceholder.typicode.com/${url}`);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            callback(JSON.parse(this.response));
        }
    };
}


getData("users" , (users) => {
    console.log(users);
    getData("posts" , (posts) => {
        console.log(posts);
        getData("comments" , (comments) => {
            console.log(comments);
        })
    })
})




let loadingScreen = document.getElementById("loading");

window.addEventListener("load", function () {
    loadingScreen.classList.add("hidden")
})

