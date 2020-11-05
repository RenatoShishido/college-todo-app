var listUsers = []

const getUserAccount = async () => {
  try {

    listUsers = await axios.get("http://localhost:3000/user")

    return listUsers

  } catch (error) {
    console.log(error)
  }
}

const getUserId = async (id) => {
  try {

    return await axios.get("http://localhost:3000/user")

  } catch (error) {
    console.log(error)
  }
}