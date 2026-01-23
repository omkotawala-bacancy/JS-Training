class User{

    constructor(name, age){
        this.id = crypto.randomUUID();
        this.name = name;
        this.age = age;
    }

    greet() {
        alert(`Hello, my name is ${this.name}`)
    }
}

let controller = {
    userArray: [],
    cloneArray: [],
    originalUl: document.getElementById('userList'),
    ul : null,
    addUser (){
        let username = document.getElementById('name').value;
        let userage = parseInt(document.getElementById('age').value);
        let user

        if(username !== "" && userage > 0){
            user = new User(username, userage)
            this.userArray.push(user);
        }
        else{
            return
        }

        
        console.log(this.userArray)

        this.renderUser(user, this.originalUl)

        document.getElementById('name').value = ""
        document.getElementById('age').value = ""

    },
    renderUser (user, ul){

        let li = document.createElement('li')
        li.textContent = `Name: ${user.name}       Age: ${user.age}`
        li.addEventListener("click", () => {
            user.greet()
        })
        ul.appendChild(li)
    },
    deepCopy (obj){

        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        const result = Array.isArray(obj) ? [] : {};

        for (const key in obj) {

            if(obj.hasOwnProperty(key)){

                const value = obj[key]
            
                if(typeof value === "object" && value !== null){

                    result[key] = this.deepCopy(value);
                }

                else{
                    result[key] = value;
                }
            }
        }

        return result;
    },

    cloneUser () {
        
        this.cloneArray = this.deepCopy(this.userArray)

        for (let i = 0; i < this.cloneArray.length; i++) {
            this.cloneArray[i].age += 5
            Object.setPrototypeOf(this.cloneArray[i], User.prototype)
            
        }
        console.log(this.cloneArray)

        this.ul = document.createElement('ul');

        this.cloneArray.forEach(user => {
            this.renderUser(user, this.ul)
        })

        document.querySelector('body').appendChild(this.ul)
    },

    init () {
        let addBtn = document.getElementById('addUser')
        addBtn.addEventListener("click", controller.addUser.bind(controller))

        let cloneBtn = document.getElementById("cloneUsers")
        cloneBtn.addEventListener("click", controller.cloneUser.bind(controller))
    }

}

controller.init()