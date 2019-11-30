
export default class Student {

    constructor(name, sex, age) {
        this.name = name
        this.age = age
        this.sex = sex
    }

    getDescription() {
        return '姓名：' + this.name + ' 性别：' + this.sex + ' 年龄：' + this.age
    }
}