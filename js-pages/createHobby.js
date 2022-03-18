



export function showHobbies(){
    let table = document.querySelector("table");
    generateTableHeader(table);
    generateTableRows(table);
}

function generateTableHeader(table) {
    let thead = table.createTHead();
    let row = table.insertRow();

    let th = document.createElement("th");
    let text = document.createTextNode("Hobby");
    th.appendChild(text);
    row.appendChild(th);
}

function generateTableRows(table, data) {
    //for (let element of data) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode("VolleyBall");
        cell.appendChild(text);
    //}
}





function searchHobby(){

}


function showAllHobbies(){

}