// 用 mockjs模拟 生成数据
var Mock = require('mockjs');

let mr = Mock.Random;   //提取mock的随机对象

module.exports = () =>{
    Mock.mock({
        'goods|3':[
            {
                'id|+1':1000
            }
        ]
    })
}
