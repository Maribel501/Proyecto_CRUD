const form = document.getElementById('formregister');
const nameinput = document.getElementById('nombre')
const apellidoinput = document.getElementById('apellido')
const pasatiempoinput = document.getElementById('pasatiempo')
const colorinput = document.getElementById('color')
const postreinput = document.getElementById('postre')
const tableBody = document.getElementById('table-body')

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function (event){
 event.preventDefault();
 
 const name = nameinput.value;
 const apellido = apellidoinput.value;
 const pasatime = pasatiempoinput.value;
 const color = colorinput.value;
 const postre = postreinput.value;

  if (name && apellido && pasatime && color && postre) {
    const newData = {name,apellido,pasatime,color,postre};
    data.push(newData);
    saveDataToLocalstorage();
    renderTable();
    form.reset();
}else{
    alert('Todos los datos son obligatorios')
}
})
function saveDataToLocalstorage() {
    localStorage.setItem("formData",JSON.stringify(data));
}

function renderTable() {
    tableBody.innerHTML = '';

    data.forEach(function (item, playa){
       const row = document.createElement('tr')
       const namecell = document.createElement('td') 
       const apellidocell = document.createElement('td') 
       const pasatiempocell = document.createElement('td') 
       const colorcell = document.createElement('td') 
       const postrecell = document.createElement('td') 
       const actioncell = document.createElement('td') 
       const editbutton = document.createElement('button')
       const deletetbutton = document.createElement('button')

       namecell.textContent = item.name;
       apellidocell.textContent = item.apellido;
       pasatiempocell.textContent = item.pasatime;
       colorcell.textContent = item.color;
       postrecell.textContent = item.postre;
       editbutton.textContent = 'Edit';
       deletetbutton.textContent = 'Delete';

       editbutton.classList.add("button",'button--secondary')
       deletetbutton.classList.add("button",'button--terciary')

       editbutton.addEventListener('click', function(){
        editData(playa);
       })

       deletetbutton.addEventListener('click', function(){
        editData(playa);
       })

       actioncell.appendChild(editbutton);
       actioncell.appendChild(deletetbutton)

       row.appendChild(namecell);
       row.appendChild(apellidocell);
       row.appendChild(pasatiempocell);
       row.appendChild(colorcell);
       row.appendChild(postrecell);
       row.appendChild(actioncell);

       tableBody.appendChild(row);
});
}

function editData(playa) {
    const item = data[playa];
    nameinput.value = item.name;
    apellidoinput.value = item.apellido;
    pasatiempoinput.value = item.pasatime;
    colorinput.value = item.color;
    postreinput.value = data.postre;
    data.splice(playa, 1);
    saveDataToLocalstorage();
    renderTable();
}

function deleteData(playa) {
    data.splice(playa, 1);
    saveDataToLocalstorage();
    renderTable();
}

renderTable();