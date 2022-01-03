/**
 * 原地址替换，时间复杂度o(n), 空间复杂度 o(1)。
 * 由于 Js 不支持对字符串进行修改，所以用数组模拟，空间复杂度反而更高了
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    // o(n) 时间复杂度下的  o(1)空间复杂度: 在原地址上修改字符串
    let s_arr = s.split("")
    let len = s_arr.length
    // 空格的个数
    let count = 0
    // 计算空格的个数
    for(let i = 0;i < len; i++){
        if(s_arr[i] === " "){
            count += 1
        }
    }
    if(count === 0){
        // 空格个数为0，直接返回 s
        return s
    }
    // 新字符串的长度 = 原来长度 + 空格的个数 * ('%20'.length - 1)
    let new_l = len + count * 2
    let j = new_l - 1
    // 从后往前遍历字符串，把字符摞到最后面去。必须从后往前遍历，不然会丢失
    for(let i = len - 1;i >= 0;i--){
        if(s_arr[i] === ' '){
            s_arr[j--] = 0
            s_arr[j--] = 2
            s_arr[j--] = '%'
        }else{
            s_arr[j--] = s[i]
        }
    }
    return s_arr.join("")
};