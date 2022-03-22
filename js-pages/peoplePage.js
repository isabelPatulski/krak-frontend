
const searchInput = document.getElementById("people-search")

if(searchInput){
searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    console.log(value)
})
}
