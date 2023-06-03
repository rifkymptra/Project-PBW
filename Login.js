const password = document.getElementById('password')
const username = document.getElementById('username')

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    valid = true
})

//Pengecekan

const password_value = password.value 
const username_value = username.value

if (username_value.length < 5 || password_value.length <6 || password_value.length > 18) {
    alert('Terdapat kesalahan pengisian form, silahkan dicek kembali.')
    valid = false
}

if (valid = true) {
    alert('Log In berhasil, Kami akan memprosesnya silakan menunggu.')
}