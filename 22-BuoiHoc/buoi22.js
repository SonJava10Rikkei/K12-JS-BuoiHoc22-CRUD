let peopleArray = [
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    hobbies: ["Đọc sách", "Du lịch"],
  },
  {
    name: "Jane Smith",
    age: 25,
    address: "456 Park Ave, Town",
    hobbies: ["Nấu ăn", "Chơi Piano"],
  },
  {
    name: "Bob Johnson",
    age: 40,
    address: "123 Main St, City",
    hobbies: ["Đi bộ", "Xem phim"],
  },
];

const table = document.querySelector("table");

function renderHTML() {
  const dataHTML = `
    <thead>
        <th>No.</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Hobbies</th>
        <th colspan="2">Action</th>
    </thead>
    <tbody>
    ${peopleArray
      .map(function (item, index) {
        return `
        <tr >
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.address}</td>
          <td>${item.hobbies.join(", ")}</td>
          <td >
            <button 
              type="button" class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onclick="openModalEdit(${index})"
            >
              Edit
            </button>
            <button
              type="button" class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalDelete"
              onclick="deleteFunction(${index})"
            > 
              Delete
            </button>
          </td>
        </tr>
        `;
      })
      .join("")}
    </tbody>
    `;
  table.innerHTML = dataHTML;
}

const name = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const hobbies = document.getElementById("hobbies");

let indexEdit;
function saveFunction() {
  const newData = {
    name: name.value,
    age: age.value,
    address: address.value,
    hobbies: [hobbies.value],
  };

  if (indexEdit === 0 || indexEdit) {
    peopleArray[indexEdit] = newData;
    const closeEdit = document.getElementById("closeEdit");
    closeEdit.click();
    setTimeout(function () {
      alert("Edit Success!");
    }, 1000);
  } else {
    peopleArray.push(newData);
    alert("Add new Success!");
  }
  renderHTML();
}

function openModalAdd() {
  indexEdit = "";
  name.value = "";
  age.value = "";
  address.value = "";
  hobbies.value = "";
}

function openModalEdit(index) {
  var element = document.getElementById("exampleModalLabel");
  element.innerHTML = "Edit People";
  indexEdit = index;
  name.value = peopleArray[index].name;
  age.value = peopleArray[index].age;
  address.value = peopleArray[index].address;
  hobbies.value = peopleArray[index].hobbies.join(", ");
}

function deleteFunction(index) {
  var namePeople = peopleArray[index].name;
  var element = document.getElementById("nameDelete");
  element.innerHTML = namePeople;
}

function actionDeleteFunction(index) {
  peopleArray.splice(index, 1);
  const close = document.getElementById("closeDelete");
  close.click();
  renderHTML();
}

renderHTML();
