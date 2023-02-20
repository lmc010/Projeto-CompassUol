

function GetCurrentDate(){

    const Date = document.getElementById("divdata")
    const currentDate = new Date(),
    options = {
        month:'long', day:"numeric", year:"numeric"
    }

    Date.innerHTML = currentDate.toLocaleDateString('en',options)
}


export default GetCurrentDate;