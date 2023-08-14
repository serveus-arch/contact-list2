// Lista de contactos predefinidos
let contactos = []
  
// Función para imprimir los contactos en la lista
  function mostrarContactos() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
  
    for (let i = 0; i < contactos.length; i++) {
      const contacto = contactos[i];
  
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${contacto.nombres} ${contacto.apellidos}</strong>
        <div class="contact-info">
          Teléfono: ${contacto.telefono}<br>
          Ciudad: ${contacto.ubicaciones.ciudad}<br>
          Dirección: ${contacto.ubicaciones.direccion}
        </div>
        <button class="edit-button">Editar</button>
        <button class="delete-button">Borrar</button>
      `;
  
      const editButton = li.querySelector(".edit-button");
      editButton.addEventListener("click", () => mostrarFormularioEdicion(i));
  
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => borrarContacto(i));
  
      contactList.appendChild(li);
    }
  }
  
  // Función para mostrar un formulario de edición
  function mostrarFormularioEdicion(index) {
    const contacto = contactos[index];
  
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="text" id="editNames" placeholder="Nombres" value="${contacto.nombres}">
      <input type="text" id="editLastNames" placeholder="Apellidos" value="${contacto.apellidos}">
      <input type="text" id="editPhone" placeholder="Teléfono" value="${contacto.telefono}">
      <input type="text" id="editCity" placeholder="Ciudad" value="${contacto.ubicaciones.ciudad}">
      <input type="text" id="editAddress" placeholder="Dirección" value="${contacto.ubicaciones.direccion}">
      <button class="save-button">Guardar</button>
    `;
  
    const saveButton = li.querySelector(".save-button");
    saveButton.addEventListener("click", () => guardarEdicion(index));
  
    contactList.replaceChild(li, contactList.childNodes[index]);
  }
  
  // Función para guardar los cambios de edición
  function guardarEdicion(index) {
    const li = contactList.childNodes[index];
    
    const editNames = li.querySelector("#editNames").value;
    const editLastNames = li.querySelector("#editLastNames").value;
    const editPhone = li.querySelector("#editPhone").value;
    const editCity = li.querySelector("#editCity").value;
    const editAddress = li.querySelector("#editAddress").value;
  
    contactos[index].nombres = editNames;
    contactos[index].apellidos = editLastNames;
    contactos[index].telefono = editPhone;
    contactos[index].ubicaciones.ciudad = editCity;
    contactos[index].ubicaciones.direccion = editAddress;
  
    mostrarContactos();
  }
  
  // Función para borrar un contacto existente
  function borrarContacto(index) {
    contactos.splice(index, 1);
    mostrarContactos();
  }
  
  // Función para agregar un nuevo contacto
  function agregarContacto() {
    const newContactInput = document.getElementById("newContact");
    const newContactName = newContactInput.value;
  
    if (newContactName.trim() !== "") {
      const newContact = {
        id: contactos.length + 1,
        nombres: newContactName,
        apellidos: "",
        telefono: "",
        ubicaciones: {
          ciudad: "",
          direccion: ""
        }
      };
      contactos.push(newContact);
      newContactInput.value = "";
      mostrarContactos();
    }
  }
  
  // Event listener
  document.getElementById("addButton").addEventListener("click", agregarContacto);
  
  // Inicializar la lista de contactos al cargar la página
  const contactList = document.getElementById("contactList");
  mostrarContactos();
  