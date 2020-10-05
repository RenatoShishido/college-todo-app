export function alertError(color, error) {
  $('.alert').addClass(`alert-${color} show`).append('<p id="msg">' + error.response.data.error + '</p>')
  intervalo = setInterval(() => {
    $('#msg').remove()
    $('.alert').removeClass('alert-danger show')
  }, 1000)
}