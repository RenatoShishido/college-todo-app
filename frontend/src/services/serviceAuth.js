var intervalo
async function registerUser() {
  const nome = $("#sing-up-nome").val()
  const email = $("#sing-up-email").val()
  const password = $("#sing-up-password").val()

  const user = {
    nome,
    email,
    password
  }
  clearInterval(intervalo)
  try {

    await axios.post("http://localhost:3000/register", user)

    alertSuccess('success', " Usuario  cadastrado com sucesso! ")

  } catch (error) {
    alertError('danger', error)
  }
}


async function authenticateUser() {
  const email = $("#sing-in-email").val()
  const password = $("#sing-in-password").val()

  const user = {
    email,
    password
  }
  clearInterval(intervalo)
  try {

    await axios.post("http://localhost:3000/authenticate", user)


    alertSuccess('success', " Usuario  logado com sucesso! ")

    return window.location.href = "./views/dashboard.html"

  } catch (error) {
    alertError('danger', error)

  }
}

function clearFieldSingUp() {
  $("#sing-up-nome").val() = ""
  $("#sing-up-email").val() = ""
  $("#sing-up-password").val() = ""
}

function clearFieldSingIn() {
  $("#sing-in-email").val() = ""
  $("#sing-in-password").val() = ""
}

function alertError(color, error) {
  $('.alert').addClass(`alert-${color} show`).append('<p id="msg">' + error.response.data.error + '</p>')
  intervalo = setInterval(() => {
    $('#msg').remove()
    $('.alert').removeClass(`alert-${color} show`)
  }, 1000)
}

function alertSuccess(color, succces) {
  $('.alert').addClass(`alert-${color} show`).append('<p id="msg">' + succces + '</p>')
  intervalo = setInterval(() => {
    $('#msg').remove()
    $('.alert').removeClass(`alert-${color} show`)
  }, 1000)
}