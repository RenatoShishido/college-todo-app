var intervalo
async function registerUser() {
  const nome = document.getElementById("sing-up-nome").value
  const email = document.getElementById("sing-up-email").value 
  const password = document.getElementById("sing-up-password").value 

  const user = {
    nome,
    email,
    password
  }
  clearInterval(intervalo)
  try {

    await axios.post("http://localhost:3000/register", user)

    
    alertSuccess('success', " Usuario  cadastrado com sucesso! ")
    clearFieldSingUp()

  } catch (error) {
    alertError('danger', error)
    clearFieldSingUp()
  }
}


async function authenticateUser() {
  const email = document.getElementById("sing-in-email").value
  const password = document.getElementById("sing-in-password").value

  const user = {
    email,
    password
  }
  clearInterval(intervalo)
  try {

    await axios.post("http://localhost:3000/authenticate", user)


    alertSuccess('success', " Usuario  logado com sucesso! ")
    clearFieldSingIn()

    return window.location.href = "/dashboard"

  } catch (error) {
    alertError('danger', error)
    clearFieldSingIn()

  }
}

function clearFieldSingUp() {
  document.getElementById('sing-up-nome').value = ''
  document.getElementById('sing-up-email').value = ''
  document.getElementById('sing-up-password').value = ''
}

function clearFieldSingIn() {
  document.getElementById('sing-in-email').value = ''
  document.getElementById('sing-in-password').value = ''
}

function alertError(color, error) {
  $('.alert').addClass(`alert-${color} show`).append('<p id="msg">' + error.response.data.error + '</p>')
  intervalo = setInterval(() => {
    $('#msg').remove()
    $('.alert').removeClass(`alert-${color} show`)
  }, 2000)
}

function alertSuccess(color, succces) {
  $('.alert').addClass(`alert-${color} show`).append('<p id="msg">' + succces + '</p>')
  intervalo = setInterval(() => {
    $('#msg').remove()
    $('.alert').removeClass(`alert-${color} show`)
  }, 2000)
}