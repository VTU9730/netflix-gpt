export const checkValidData = (email,password,name) => {
    const isValidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(password)
    const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    if(!isValidEmail) return "Enter a valid Email"
    if(!isValidPassword) return "Enter a valid Password"
    // if(!isValidName) return "Enter a valid Name"
    return null
}