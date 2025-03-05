// 1st Task
const IterateObject = (obj) => {
    const { from, to } = obj

    if (to < from) {
        return console.log('Error: Invalid Inputs')
    }

    if (typeof (from) !== "number" || typeof (to) !== "number") {
        return console.log('Error: Both from and to must be numbers')
    }


    for (let i = from; i <= to; i++) {
        console.log(i)
    }
}

IterateObject({ from: 1, to: 10 })

// 2nd Task
const personInfo = (name, age) => {
    return [
        { name, age },
        Object.assign({}, { name, age }),
        new Object({ name, age }),
    ]
}

const newObject = Object.create({ name: 'sergi', age: 19 })
console.log(personInfo('sergi', 19))

console.log(newObject.name)
console.log(newObject.age)

