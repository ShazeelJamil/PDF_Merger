class password_generator {
    generate_pasword(lenght) {
        let pass =''          
        let chars = "abc1d2e4fh3ij4kl5mn6op7qr8s9tu0vwxyz!@#$%^&*()_+?><,.~`"
        for (let i = 0; i < lenght; i++) {
            let randomIndex=Math.floor(Math.random() * chars.length)
            pass += chars[randomIndex]
        }        
        console.log(pass)
    }
}
let pass = new password_generator()
// pass.generate_pasword(15);
// console.log(pass.password)