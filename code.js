// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
// Your Code Here.

let findNanPage = [], newHistory = `<p>${pages[currentPage]}</p>`

while (currentPage !== null) {

    findNanPage.push(currentPage)
 
    if (userHistory(currentPage) === true) {
       
        newHistory += "<h2>The End!</h2>"
        // lines 22, 23, 24 and 25 will remove the paragraphs including currentPage === NaN from the variable newHistory when the user will press 'cancel' or 'ok' button without any input.  
        if (findNanPage.includes(NaN)){
            newHistory = newHistory.replace(`<P>You turned to the page ${currentPage}</P> <p>${pages[currentPage]}</p> `, '')
        }
        document.write(newHistory)
        currentPage = null
    } else if (userHistory(currentPage) === false) {

        currentPage = parseInt(prompt(pages[currentPage] + ' What page would you like to go to ?'))
    }

    newHistory += `<P>You turned to the page ${currentPage}</P> <p>${pages[currentPage]}</p> `
}

function userHistory(currentPage) {
    
    if (endingPages.find(page => page === currentPage) || findNanPage.includes(NaN) ) {

        return true
    } else if (!endingPages.find(page => page === currentPage)) {

        return false
    }

}
