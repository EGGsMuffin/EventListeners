//alert("Page Loaded");

document.getElementById("1").addEventListener("click", Hello);

function Hello(){
    alert("Hello");
    document.getElementById("1").innerHTML = "I have been destroyed!";
    document.getElementById("2").innerHTML = prompt("What is love!");;
}

document.getElementById("3").addEventListener("mouseenter", function(){
    this.innerHTML = "Mouse Entered!";
});

document.getElementById("3").addEventListener("mouseleave", function(){
    this.innerHTML = "Mouse Left!";
});