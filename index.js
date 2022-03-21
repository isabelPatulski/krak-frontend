import{renderTemplate, setActive, showPage} from "./utils.js"
import{getAllPeople} from "./js-pages/seePeoplePage.js"

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
        break
      }
      case "page-hobby": {
        
        break
      }
      case "page-addPerson": {
        
        break
      }
      case "page-editPerson": {
        
        break
      }
      case "page-deletePerson": {
        
        break
      }
    }
  }

  document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render
updateLoginDependentComponents()
