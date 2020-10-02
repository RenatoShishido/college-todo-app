async function registerUser() { 
  const nome = document.getElementById("sing-up-nome").value
  const email = document.getElementById("sing-up-email").value
  const password = document.getElementById("sing-up-password").value

  const user = {
      nome,
      email,
      password
    }

  try {

    const response = await axios.post("http://localhost:3000/register", user)
    alert("Usuario cadastrado com sucesso")
    return response

  } catch (error) {
    return alert(error.response.data.error)
  }
}

async function authenticateUser() { 
  const email = document.getElementById("sing-in-email").value
  const password = document.getElementById("sing-in-password").value

  const user = {
      email,
      password
    }

  try {

    await axios.post("http://localhost:3000/authenticate", user)


    return window.location.href = "./views/dashboard.html"

  } catch (error) {
    return alert(await error.response.data.error)
  }
}

function clearFieldSingUp(){
  document.getElementById("sing-up-nome").value = ""
  document.getElementById("sing-up-email").value = ""
  document.getElementById("sing-up-password").value = ""
}

function clearFieldSingIn() {
  document.getElementById("sing-in-email").value = ""
  document.getElementById("sing-in-password").value = ""
}


