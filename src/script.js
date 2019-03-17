"use strict"

// import axios from 'axios';

class User {

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log("This is the register as: " + this.username + " " + this.email + " " + this.password);
    }

    static info() {
        console.log("Power Overload");
        let junk = "Overload";
        document.getElementById('title').innerHTML = `Power ${junk}`;
    }
}


class Member extends User {
    constructor(username, email, password, level) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.level = level;
    }

    getLevel() {
        console.log(this.level);
        User.info();
    }
}

let admin = new Member("@abdul_reality", "wahabawudu2020@gmail.com", "dynamo2020", "Premium");

admin.getLevel();
admin.register();
Member.info();

function stringChecker(the_str, start_str, end_str, include_str) {
console.log('string starts with is: ' + the_str.startsWith(start_str));

console.log('string ends with is: ' + the_str.endsWith(end_str));

console.log('string includes with is: ' + the_str.includes(include_str));
let num = 3
let num_str = num.toFixed();
console.log(num_str);
console.log(Number.isInteger(num));
console.log(num_str instanceof String);

let the_array = [2,3,5,4,9,4];

let the_set = new Set(the_array);
console.log(the_set);
the_set.add(3);
the_set.add(1);
the_set.add({name: 'Abdul-Wahab Awudu'});
the_set.add(10);
the_set.delete(3);
console.log(the_set + ' size of set ' + the_set.size);
the_set.forEach(function(entry){
    console.log(entry);
});

let the_map = new Map();
the_map.set('name', 'abdul');
the_map.set('age', 25);
the_map.set('nick', 'arab dollar');
the_map.delete('nick');
console.log(the_map);
}

// let the_string = 'My grandfather\'s clock reads goodbye';
// let start_string = 'My';
// let end_string = 'no';
// let include_string = 'clock';

// stringChecker(the_string, the_string, end_string, include_string);

// function get_todos(url) {
//     axios.post(url)
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.log('error');
//     });
// }

// get_todos('https://jsonplaceholder.typicode.com/todos');

function voider(voiderst='This is a void string') {
    console.log(voiderst);
}

voider();