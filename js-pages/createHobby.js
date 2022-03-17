


const URL="JDBC_DATABASE_URL=jdbc:mysql://20.223.194.5:3306/krak;JDBC_USERNAME=root;JDBC_PASSWORD=123456"

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
    for (let element of data) {
        let row = table.insertRow();
        let cell = row.insertCell();
       // let text = document.createTextNode(element[key]);
       // cell.appendChild(text);
    }
}





function searchHobby(){

}


function showAllHobbies(){

}