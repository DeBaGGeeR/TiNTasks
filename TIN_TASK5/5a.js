var person = {
    name: "Bakhodir",
    surname: "Ibragimov",
    year_of_birth: 1996,
    getInfo() {
        return this.name + " " + this.surname + ", born " + this.year_of_birth;
    },
    isOlder(age) {
        cdate = new Date();
        temp = cdate.getFullYear() - this.year_of_birth;
        return temp > age;
    }
};

console.log(person.getInfo());
console.log(person.isOlder(21));