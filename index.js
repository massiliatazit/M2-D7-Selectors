/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to remove the "Search" magnifying glass icon
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to change the color of the main title
        EX15) Write a function to change the column size for post headings
        EX16) Write a function to remove all the links under "Elsewhere"
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */

// EX11) Write a function to add a new link into the navbar
function Addlink() {
    const nav = document.querySelector(".nav");
    const newlink = document.createElement("a");
    const textnode = document.createTextNode("New York");
    newlink.classList.add("p-2");
    newlink.classList.add("text-muted");
    newlink.appendChild(textnode);
    newlink.setAttribute("href", "#");
    nav.appendChild(newlink);
}
Addlink();

// EX12) Write a function to remove the "Search" magnifying glass icon
function DeleteIcone() {
    const icone = document.querySelector("svg");

    if (icone.parentNode) {
        icone.parentNode.removeChild(icone);
    }
}

DeleteIcone();

// EX13) Write a function to change the background of the jumbotron

function changeBackground() {

    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.classList.remove('bg-dark')
    jumbotron.style.backgroundColor = '#87255B'
}
changeBackground()

//EX14) Write a function to change the color of the main title
function changetitleColor() {
    const title = document.querySelector("h1")
    title.style.color = '#361D2E'


}
changetitleColor()

//EX15) Write a function to change the column size for post headings


function changeColumnSize() {

    const headings = document.querySelectorAll("h2")
    for (i = 0; i < headings.length; i++) {

        headings[i].style.columnWidth = '500px'
    }
}
changeColumnSize()

// EX16) Write a function to remove all the links under "Elsewhere"

function removeLinks() {
    const h4 = document.querySelectorAll("h4")
    const a = document.querySelectorAll('a')
    for (i = 0; i < h4.length; i++) {

        if (h4[i].innerHTML === 'Elsewhere') {
            console.log(h4[i].innerHTML)
            for(j=0;j<a.length;j++){

                a[j].removeAttribute("href");
            }

            
        }
            

        

}   

}
    removeLinks()
//EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

function TrimChar(){

    const paragraph = document.querySelectorAll('div.blog-post > p')[0]

    paragraph.innerHTML.substring(50)


}
TrimChar()