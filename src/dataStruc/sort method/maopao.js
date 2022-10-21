// 冒泡排序原理
// 两相邻的数依次比较
// 若要求升序排列 两两比较时前一个数比后一个数大则互换位置
// 相互比较完一轮最大的数就会到最后面，并且不再参与比较
// 循环比较 直到比较完成
// 升序为例
var arr =[2,0,1,15,6];
function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++) {
        // 后面的是最大的已经排好了 不用再排
        for (let j = 0; j < arr.length - i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
            
        }
    }
    return arr;
}
console.log(bubbleSort(arr))


