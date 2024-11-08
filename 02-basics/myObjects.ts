const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive:true
}

// function createUser({name:string,isPaid:boolean}) {
    
// }

// createUser({ name: 'hitesh', isPaid: false })

// let newUser = { name: 'hitesh', isPaid: false, email: 'h@h.com' }
// createUser(newUser)

function createCourse(): {name:string,price:number}{
    return { name: 'hitesh', price: 1 }
}

// type User = {
//     name: string
//     email: string
//     isActive:boolean
// }

// type bool = boolean
 
// function createUser(user: User):User { return user}
// createUser({name:'',email:'',isActive:true})

type User = {
   readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?:number
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive:false
}

myUser.email = 'j@j.com'

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}


export {}