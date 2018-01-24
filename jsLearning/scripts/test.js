let youLikeMeat = true

if(youLikeMeat){
    document.write('<div>you are a carnivore</div>')
    document.write('<div> you might want to think about it</div>')
}

let myNum = 10

if (myNum == 11){
    document.write('\n the number is equal to 11')
}
else{
    document.write('<div> the number is not equal to 11 </div>')
}

let links = document.getElementsByTagName("a")

/*links.forEach(element => {
    element.className = "link-" + 
});*/

for(i = 0; i <links.length ; i++){
    links[i].className = "links-"+i
}