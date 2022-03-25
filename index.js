import{renderTemplate, setActive, showPage} from "./utils.js"
import{showHobbies, searchHobbyHandler} from "./js-pages/createHobby.js";
import{getAllPeople} from "./js-pages/seePeoplePage.js"
<<<<<<< HEAD
import{setDawa} from "./script.js"
=======
import{addPersonElement} from "./js-pages/addPerson.js"
>>>>>>> 1f878bcf4bd36af77faad70c29e4a025327ba4bc

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      case "page-home": {
        break
      }
      case "page-people": {
        getAllPeople()
<<<<<<< HEAD
        setDawa()
=======
        addPersonElement()
>>>>>>> 1f878bcf4bd36af77faad70c29e4a025327ba4bc
        break
      }
      case "page-hobby": {
        showHobbies()
        searchHobbyHandler()
        break
      }
    }
  }

  document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render