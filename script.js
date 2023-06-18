// 1) 
//создайте пустой обьект 3мя способами
let obj = {};
let obj = new Object();
let obj = Object.create(null);

// 2)
//создайте обьект с вашими персональными данными 
//пример: 
let obj = {
    name: 'Nicat',
    age: 12
}

// 3)
//чем является name в обьекте ниже?
let obj = {
    name: 'Alex',
    age: 24
}

console.log(typeof(obj))

// 4)
//чем является 'Alex' в обьекте ниже?
let obj = {
    name: 'Alex',
    age: 24
}

console.log(obj.name)

// 5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/
let obj = {};

let text = "Здравствуйте меня зовут Самуил. Я родился 4 мая 1998 года. Мне 24 года. Я вышел победителем в конкурсе Мистер Будущее. У меня 2 награды по высшей математике. Я люблю много читать и много программировать.";

let nameRegex = /меня зовут (\w+)./i;
let birthDateRegex = /родился (\d+ [а-я]+ \d+)/i;
let ageRegex = /Мне (\d+) года./i;
let awardsRegex = /У меня (\d+) награды?/i;

let nameMatch = text.match(nameRegex);
let birthDateMatch = text.match(birthDateRegex);
let ageMatch = text.match(ageRegex);
let awardsMatch = text.match(awardsRegex);

if (nameMatch) {
    obj.name = nameMatch[1];
}

if (birthDateMatch) {
    obj.birthDate = birthDateMatch[1];
}

if (ageMatch) {
    obj.age = parseInt(ageMatch[1]);
}

if (awardsMatch) {
    obj.awards = parseInt(awardsMatch[1]);
}

console.log(obj);

// 6)
//выведите в консоли значение name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj.name)

// 7)
//выведите в консоли значение age из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.age)


// 8)
//выведите в консоли значение isMarried из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj.isMarried)

// 9)
//выведите в консоли имя первого ребенка из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj.children[0])

// 10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (let i = 0; i < obj.childs.length; i++) {
    console.log(obj.childs[i]);
// 11)
//выведите в консоли значение itMaster из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj.awards.itMaster);
// 12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (let key in obj) {
    console.log(key);
// 13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for (let key in obj) {
    console.log(obj[key]);
}
// 14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.childs[1] = 'Linda';

console.log(obj);
// 15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.job = 'manager';

console.log(obj);
// 16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj['awards']['itMaster']);
// 17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj['name']);
// 18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete obj.job;
obj.hasJob = false;

console.log(obj);
// 19)
//удалите name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj.name;

console.log(obj);
// 20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete obj['job'];
obj.hasJob = false;

console.log(obj);