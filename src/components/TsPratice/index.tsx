import { Button } from 'antd'
import { number } from 'echarts';
// 类型缩小
// typeof  类型守卫
function padLeft(padding: number | string, input: string) {
  //此时不确定 padding 的类型时number 还是string   需要用到类型缩小
  // 使用 判断
  if (typeof padding === 'number') {
    return new Array(padding + 1).join('') + input;
  }
  return padding + input;
}

// 真值缩小  使用 && || ！！ 来进行真挚缩小
// 例如 typeof 'hello' 结果为true
function print(strs: string | string[] | null) {
  // 多加一层判断就好
  if (typeof strs === 'object' && strs) {
    // 此时  strs 报错 可能为 null  因为 null的类型 也是一个对象
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
  }
}

function multip(values: number[] | undefined, factor: number) {
  // 没有values的时候  也就是values 是 undefined的时候 返回undefined
  if (!values) {
    return values
  } else {
    return values.map((x) => {
      return x = factor
    })
  }
}


// 等值缩小
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

function prints(strs: string | string[] | null) {
  // 多加一层判断就好
  if (strs !== null) {
    if (typeof strs === 'object') {
      // 此时  strs 报错 可能为 null  因为 null的类型 也是一个对象
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  } else { }

}
// 定义一个接口
interface Conter {
  value: number | null | undefined
}

// function multipV(container:Conter,factor:number) {
//   if(container.value !=null) {
//     console.log(container.value)
//     console.log(factor)
//   }
// }
// multipV([value:9],6)


// in 操作符缩小
// type Fish = { swim: () => void }
// type Bird = { fly: () => void }
// type Human = { swim?: () => void; fly?: () => void }

// function move(animal: Fish | Bird | Human) {
//   //  in  表示 'swim' 是否在 animal 里面
//   if ('swim' in animal) {
//     // 如果在 则证明其中 有 swim方法 可以调用
//     // 若 animal ：Fish | Human  则里面可能没有 swim 所以报错
//     // 在确定是这个类型的时候 可以加 类型断言 强制 他在此处是
//     return (animal as Fish).swim()
//   }

//   // 在确定是这个类型的时候 可以加 类型断言 强制 他在此处是
//   return (animal as Bird).fly()
// }


// instance 操作符缩小  检查一个值 是否为另一个值的实例
function high(s:Date | string) {
  if(s instanceof Date){
    console.log(s.toString())
  }else {
    console.log(s)
  }
}
high(new Date())
high('我是字符串')


// 分配缩小 个人理解 可以叫做 类型推断
  //此时 x类型 分配 了两个 number 或者 string
let x = Math.random() <0.5 ? 10 : 'oppo'

x =666
console.log(x) //666

x="6666"
console.log(x) //'6666'  此时上下俩个赋值都可以正常赋值

// x=true    //此时 赋值的类型和 上面的不匹配 会报错


// 控制流分析
function examp(){
  let x : string | number |boolean

  // 在此处赋值
  x= Math.random() < 0.5

  if(Math.random() < 0.5) {
    x='hello'
  }else {
    x=111
  }
  // 在上方if语句中 只有两种类型 string  和 number 现在函数只有 string  和 number 类型
  return x
}
let s = examp()
s='hellos'  //不会报错
s=666  //不会报错
// s=false  // 此时会报错 ， 因为控制流分析 之后  该函数类型上面已经没有了boolean类型了


// 使用类型谓词      在函数后 :pet is Fish
type Fish = {
  name:string,
  swim:()=>void
}
type Bird = {
  name:string,
  fly:()=>void
}
function isFish(pet:Fish | Bird): pet is Fish{
  // 此时 类型 可能为 Bird  上面没有 swim() 此时需要进行类型断言 先给他一个Fish 和后方的 等式 无关
  return (pet as Fish).swim !== undefined
  // 此时 如果有swim 方法 则不相等 结果为true
}

function getIs():Fish | Bird {
  let fish:Fish = {
    name:'eatFish',
    swim:()=> {
  console.log('swim')
    }
  }

  let bird:Bird = {
    name:'toFly',
    fly:()=>{
      console.log('fly')
    }
  }

  return true ? bird : fish
}

let pet = getIs()  //将pet 用getIs函数赋值

// 若 pet 值为true 则表示 pet === fish 包含swim方法
if(isFish(pet)){
  pet.swim()
}else {
  // 同上
  pet.fly()
}


// unions (联合类型)  拆分 一个大的 接口 分为两个

// interface Shape {
//   kind:'circle' | 'square'
//   radius?:number
//   sideLgenth?:number
// }

interface Circle {
  kind:'circle',
  radius:number
}

interface Square {
  kind:'square',
  sideLgenth:number
}
interface Timer {
  kind:'time',
  radius:number
}

type Shape  = Circle | Square | Timer

function getAre(shap:Shape){
  switch(shap.kind) {
    case 'circle':
      return Math.PI * shap.radius ** 2
    case 'square':
      return shap.sideLgenth * 2
      default:
        // 若上方都不满足 则执行下方 其中值的类型为never
        // never 可以赋值给任意类型，任意类型不能被他赋值
        // 此时只有两种情况 所以 不会报错 若出现第三种类型 下方定义的 exhaust 会报错
      // never 类型和 穷尽性检查
      // const exhaust:never = shap
      // return exhaust

  }

}


// 函数类型表达式
type bon = (a:string)=>void
// function greet(fn:(a:string)=>void){
//   fn('hello.ts')
// }
// 可以 简写为：
function greet(fn:bon){
  fn('hello.ts')
}

function printse(x:string){
  console.log(s)
}

greet(printse)


// 调用签名

// 泛型函数 类型推断
// function firstElement(arr:any){
//   return arr[0]
// }
// console.log(firstElement(['a','b','c']),'泛型函数-类型推断')


function firstElement<Type>(arr: Type[]): Type | undefined{
  return arr[2]
}
// 泛型 可以根据 输出的结果 推测对应的类型
// 可以定以多个泛型
function Maps<Input,Output>(arr:Input[],func:(arg : Input) => Output): Output[] {
  return arr.map(func)
}
const parsed = Maps(['1','2','3'],(n)=>parseInt(n))
console.log(parsed,'定义多个泛型')
console.log(firstElement(['a','b','c']),'泛型函数-类型推断')
console.log(firstElement([6,7,6]),'泛型函数-类型推断2')
console.log(firstElement([]),'泛型函数-类型推断3')



// 泛型函数 参数限制  extends  继承
function longest<Type extends {length:number}>(a:Type,b:Type){
  if(a.length >= b.length) {
    return a
  }else{
    return b
  }
}
const Aarrays = longest([1,2,3],[4,5,6,7])  //a.lengtg < b.length  返回b 类型为number
const Lengths = longest(['1','3','5','7'],['2','4','6','8'])   //类型为string

console.log('返回的b值',Aarrays)
console.log('返回的a值',Lengths)



// 使用受限值
// function miniL<Type extends {length:number}>(obj:Type,mini:number):Type{
//   if(obj.length >= mini) {
//     return obj
//   }else {
//     return { length:mini}   //此处会报错
//   }
// }



// 指定类型参数
function combine<Type>(arr:Type[],arr2:Type[]):Type[]{
  // concat 用于连接两个或多个数组
  return arr.concat(arr2)
}

const arr = combine([1,2,3],[5,5,5])  //类型一致时
// const arrs = combine(['string'],[1,2,3]) //类型不一致此时会报错
const arrs = combine<string | number>(['string'],[1,2,3]) //此时需要加一个泛型 定义好后面两个参数的类型 强制转换

console.log(arr,'两个参数同类型的时候 arr数据')
console.log(arrs,'两个参数不同类型的时候 arrs数据')







const TS = () => {
  // 真值缩小
  const multip = (values: number[] | undefined, factor: number) => {
    // 没有values的时候  也就是values 是 undefined的时候 返回undefined
    if (!values) {
      console.log(values)
    } else {
      values.push(factor)
      // return values.map((x) => {
      //   factor = factor + x
      //   console.log(factor)
      // })
      console.log(values)
    }
  }
  // 等值缩小
  const multipV = (container: Conter, factor: number) => {
    if (container.value != null) {
      console.log(container.value)
      console.log(factor)
    }
  }

  return (
    <div className='box'>
      <Button type='dashed' onClick={() => multipV({ value: 5 }, 9)} block style={{ height: 50, background: '#c3c2d7' }}>点我获取数据</Button>
    </div>
  )
}

export default TS
