
function addTwo(num: number):number {
    return num + 2
}

function getUpper(val:string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{}


loginUser('h','h@h.com')
signUpUser("jeevan","sds@gmail.com",false)
getUpper("1") 

// function getValue(myVal: number) {
//     if (myVal > 5) return true
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1,2,3]

heros.map((hero): string => `hero is ${hero}`)

function consoleError(errmsg: string):void {
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export { }
