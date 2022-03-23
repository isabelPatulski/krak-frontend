


export function convertAddress(){
    const address = document.getElementById("adresse").value
    if(address != null){
        console.log(String(address))
    }else {
        console.log("It's null")
    }
}