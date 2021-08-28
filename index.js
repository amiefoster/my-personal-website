
const headerOne = document.querySelector('h1')

console.log('h1 log',headerOne)

document.getElementById("header").addEventListener("mouseover", function() {
    document.getElementById("header").style.backgroundColor = "wheat";
});
document.getElementById("header").addEventListener("mouseout", function() {
    document.getElementById("header").style.backgroundColor = "white";
});

document.getElementById('footer').addEventListener("mouseover", function(){
    document.getElementById("footer").style.backgroundColor = "lightpink";
})

document.getElementById('footer').addEventListener("mouseout", function(){
    document.getElementById("footer").style.backgroundColor = "hotpink";
})
