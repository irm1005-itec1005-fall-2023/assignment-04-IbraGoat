/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";
// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();

// script.js
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const p = document.createElement('p');
  p.textContent = input.value;
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'Delete';
  const editButton = document.createElement('button');
  editButton.classList.add('editButton');
  editButton.textContent = 'Edit';
  const editForm = document.createElement('form');
  editForm.classList.add('edit-form');
  const editInput = document.createElement('input');
  editInput.type = 'text';
  const editSubmitButton = document.createElement('button');
  editSubmitButton.type = 'submit';
  editSubmitButton.textContent = 'Save';
  editForm.appendChild(editInput);
  editForm.appendChild(editSubmitButton);
  li.appendChild(checkbox);
  li.appendChild(p);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  li.appendChild(editForm);
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', function(event) {
  if (event.target.classList.contains('deleteButton')) {
    const li = event.target.parentElement;
    li.remove();
  } else if (event.target.classList.contains('editButton')) {
    const li = event.target.parentElement;
    const p = li.querySelector('p');
    const editForm = li.querySelector('.edit-form');
    const editInput = li.querySelector('.edit-form input[type="text"]');
    p.style.display = 'none';
    editForm.style.display = 'flex';
    editInput.value = p.textContent;
  }
});

ul.addEventListener('submit', function(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  const p = li.querySelector('p');
  const editForm = li.querySelector('.edit-form');
  const editInput = li.querySelector('.edit-form input[type="text"]');
  p.textContent = editInput.value;
  p.style.display = 'inline';
  editForm.style.display = 'none';
});