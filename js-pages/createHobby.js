
/*const getData = () =>{
    fetch('http://localhost:8080/hobbies').then(r => res.json()).then(hobbies => {
        createHobbyTable()

        for (const hobbies of hobbies) {
            let hobbyIndex = hobbies.indexOf(hobby) + 1
            appendHobbies(hobbies, hobbyIndex)
        }
    }
*/


export function showHobbies(){
    //let table = document.querySelector();
    let table = document.getElementById("hobby-table")
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
        let text2 = document.createTextNode("Painting");
        cell.appendChild(text2);
    let row2 = table.insertRow();
    let cell2 = row2.insertCell();
        let text3 = document.createTextNode("Photography");
        cell2.appendChild(text3);
    let row3 = table.insertRow();
    let cell3 = row3.insertCell();
        let text4 = document.createTextNode("Running");
        cell3.appendChild(text4);
    let row4 = table.insertRow();
    let cell4 = row4.insertCell();
        let text5 = document.createTextNode("Eating");
        cell4.appendChild(text5);
    let row5 = table.insertRow();
    let cell5 = row5.insertCell();
        let text6 = document.createTextNode("Ice Skating");
        cell5.appendChild(text6);
    let row6 = table.insertRow();
    let cell6 = row6.insertCell();
        let text7 = document.createTextNode("Sleeping");
        cell6.appendChild(text7);
    //}
}
export function searchHobbyHandler(){
  //document.getElementById("btn-search-hobby").onclick = function () {searchHobby()
  //}
    document.getElementById("hobby-search").oninput = function () {searchHobby()}
}

export function searchHobby(){
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("hobby-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("hobby-table");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

}


function showAllHobbies(){

}