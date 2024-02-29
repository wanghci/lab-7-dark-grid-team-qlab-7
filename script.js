let light = document.getElementById("light-button");
light.addEventListener("click", (e) =>  {
    e.preventDefault();
    let body = document.getElementById("body");
    body.classList.remove("os-default");
    body.classList.add("light");
    body.classList.remove("dark");
});

let dark = document.getElementById("dark-button");
dark.addEventListener("click", (e) =>  {
    e.preventDefault();
    let body = document.getElementById("body");
    body.classList.remove("os-default");
    body.classList.add("dark");
    body.classList.remove("light");
});

let os = document.getElementById("os-default");
os.addEventListener("click", (e) =>  {
    e.preventDefault();
    let body = document.getElementById("body");
    body.classList.add("os-default");
    body.classList.remove("dark");
    body.classList.remove("light");
});