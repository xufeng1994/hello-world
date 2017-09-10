/**
 *  javascript 对象
 */


//  const User = {
//      name: 'xufeng',
//      tel: '13585824094',
//      password:'xf13451082032',
//      age:'25'
//  }
//     访问对象

//     console.log(User.age)
//     console.log(User)

let array = ['qwer','asdf','zxcv','t','g','b']

//  console.log(array[0])

// for(let i of array){           // 遍历数组 
//     console.log(i)
// }

array.push('123456')            // 在数组末尾添加元素
let newarray = array.pop()
for(let i of newarray){           // 遍历数组 
    console.log(i)
}