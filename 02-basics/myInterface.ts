interface User {
    readonly dbId:number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname:string,value:number):number
}

interface User{
    githubToken:string
}

interface Admin extends User {
    role:"admin" |"ta" | "learner"
}

const hitesh: Admin = {
    dbId: 22,
    email: 'h@h.com',
    userId: 2211,
    startTrail: () => { return "trail started" },
    getCoupon: (couponname: "hitesh10", value: 10) => { return 10 },
    githubToken: 'd',
    role:'admin'
}
hitesh.email = 'h@hc.com'
// hitesh.dbId = 22