import{} from "./utils.js"
import{} from "./js-for-pages/login.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      // case "page-1": {
      //   break
      // }
      case "page-about": {
        break
      }
      case "page-login": {
        setupLoginHandlers()
        break
      }
      case "page-logout": {
        logout()
        break
      }
      case "page-my-details": {
    
        break
      }
      case "page-editUser": {
    
        break
      }
      case "page-deleteUser": {
    
        break
      }
    }
  }

  document.getElementById("menu").onclick = renderMenuItems;
showPage("page-about") //Set the default page to render
updateLoginDependentComponents()