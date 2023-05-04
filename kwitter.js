
function addUser() /* Chamar a função addUser */
{

  userName = document.getElementById("userName").value; /* Obtenha o nome do usuário da input box "userName" e armazene dentro de uma variável. */

  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html"; /* Escreva o nome da página para onde seremos redirecionados. */
}

