let score: number | string = 33

score = 9
score = 'kddf'

type User = {
    name: string
    id:number
}

type Admin = {
    username: string
    id:number
}

let hitesh: User | Admin = { name: 'hitesh', id: 334 }

hitesh = { username: 'hc', id: 334 }

function getDbId(id: number | string) {
    // making some api calls
    console.log(`DB id is: ${id}`)
    if(typeof id === "string") id.toUpperCase()
}

//array
const data:number[] = [1,2,3,]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = [1, "@", 3, true]

let seatAllotment: "aisle" | "middle" | "window"


getDbId(3)
getDbId("3")

//2:04:47