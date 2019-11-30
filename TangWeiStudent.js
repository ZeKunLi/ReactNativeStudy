import Student from './Studunt'

export default class TangWeiStudent extends Student {
    constructor() {
        super("TangWei", "Woment", "3")
    }

    getDescription() {
        return this.name + " : 小蓝杯，谁不爱"
    }
}



