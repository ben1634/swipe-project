// helpers.js/ utility functions through out the project

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function clearInput(input) {
  input.value = "";
}