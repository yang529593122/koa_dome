const strategys = {
    isNotEmpty: function (value, errorMsg) {
        if (value === ''|| value===undefined) {
            return errorMsg
        }
    },
    // 限制最小长度
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg
        }
    },
    // 手机号码格式
    mobileFormat: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg
        }
    }
}

const Validator = function () {
    this.cache = [] // 保存效验规则
}
Validator.prototype.add = function (value, rules) {
    let self=this
    let lent = rules.length
    for (let i = 0; i < lent; i++) {
        let rule = rules[i];
        (function (rule) {
            let strategyAry = rule.strategy.split(':')
            let errorMsg = rule.errorMsg
            self.cache.push(function () {
                let strategy = strategyAry.shift()
                strategyAry.unshift(value)
                strategyAry.push(errorMsg)
                return strategys[strategy].apply(value,strategyAry )
            })
        })(rule)
    }
}

Validator.prototype.start = function () {

    for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
       let  msg = validatorFunc();
        if (msg) {
            return  msg
        }
    }

}



 export default Validator