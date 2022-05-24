function getAdmins(map) {
    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Heitor', 'Admin');
usuarios.set('Aparecida', 'Admin');
usuarios.set('Beatriz', 'User');

console.log(getAdmins(usuarios));