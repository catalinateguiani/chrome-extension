let myLeads=[]

// let myLeads = `["www.hotnews.com"]`;

// myLeads = JSON.stringify(myLeads)

// myLeads = JSON.parse(myLeads) // turn into an array

// myLeads.push("adevarul.ro") // push a new value

// myLeads = JSON.stringify(myLeads) // turn into a string

// console.log(typeof myLeads)


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")//store the delete button in a variable


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {

  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}

function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> <a target='_blank' href= '${leads[i]}'> ${leads[i]} </a> </li> `;
  }

  ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  myLeads = []
  renderLeads(myLeads)
})


inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  // myLeads = JSON.stringify(myLeads)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads(myLeads);
});



