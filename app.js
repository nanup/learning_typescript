var person = {
    name: 'nanu',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [1, 'author'],
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var newPerson = {
    name: 'nanu',
    age: 30,
    hobbies: ['one', 'two'],
    role: Role.ADMIN,
};
var favoriteHobbies = ['one', 'nanu'];
console.log(newPerson.role);
