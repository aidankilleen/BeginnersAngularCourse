export class User {
    constructor(public id:number = 0, 
                public name:string = "unknown", 
                public email:string ="unknown@gmail.com", 
                public active:boolean = false) {
    }
}

/*
export class User {
    public id:number;
    public name:string;
    public email:string;
    public active:boolean;

    constructor(id:number, name:string , email:string , active:boolean) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.active=active;
    }
}
*/