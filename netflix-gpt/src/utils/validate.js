export const validate = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/.test(password)
    
    if(!isEmailValid)  return 'Email ID is not valid'
    if(!isPasswordValid) return 'Password is not valid'

    return null
}