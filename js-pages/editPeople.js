//import {makeOptions} from "../fetchUtils.js"
//import { SERVER_URL } from "../settings";
import {LOCAL_SERVER_URL} from "../settings.js"
const URL = LOCAL_SERVER_URL

export function editPersonElement(){
     // document.getElementById("btn-edit-person").onclick = editPerson
}

export function editPerson(){
    console.log("hej")
    /*const person = {}
    person.firstName = document.getElementById("input-firstName").value
    person.lastName = document.getElementById("input-lastName").value
    person.email = document.getElementById("input-email").value
    person.phone = document.getElementById("input-phone").value

    fetch(URL, makeOptions("POST", person))
        .then(res => res.json())
        .then(newPerson => {
            document.getElementById("person-info-all").innerText = JSON.stringify(newPerson)
        })
        .catch(error => console.error(error))*/

}