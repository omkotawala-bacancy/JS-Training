const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

function canAccess(role, permission){
    if(!roles[role]) return false;
    return roles[role].includes(permission)
}

console.log(canAccess("admin", "DELETE")) // true
console.log(canAccess("viewer", "WRITE")) // false
console.log(canAccess("unknown", "READ")) // false
