/*
    Create a constant adminUser .
    Create a type from it using typeof .
    Add a new property and observe how the type changes automatically.
*/

const adminUser = {
    id: 101,
    name: "Om Kotawala",
    email: "om@gmail.com",
    role: "write",
    isActive: true
}

type AdminUser = typeof adminUser

const newUser: AdminUser = {
    id: 101,
    name: "Om Kotawala",
    email: "om@gmail.com",
    role: "write"
}
// Here error will be there add the property isActive 


