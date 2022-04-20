function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Lucas', 'Admin')
usuarios.set('Tadeu', 'Admin')
usuarios.set('Marcos', 'User')
usuarios.set('Ednilson', 'Admin')

console.log(getAdmins(usuarios))