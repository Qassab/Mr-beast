const displayDate = document.querySelector(".date")

const date = new Date()
const day = date.getDate()
const month= date.getMonth()+1
const year = date.getFullYear()
displayDate.textContent=`${day} / ${month} / ${year}`