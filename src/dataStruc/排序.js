// 1. 冒泡： 相邻两个比较，交换
// 使用pos标识pos后面的都已经进行了比较，不需要再进行比较。
function bubbleSort(arr) {
  let i = arr.length - 1; // 初始时，最后的位置不变
  while(i > 0) {
    let pos = 0;//每趟开始时,无记录交换
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp;
        pos = j; // 记录最后交换的位置
      }
    }
    i = pos;// 为下一趟排序做准备
  }
  return arr;
}
let arr1 = [2,4,3,88,67,34,1,23,67]
console.log(bubbleSort(arr1))
// 2. 选择排序： 数据规模小较好 o(n*2) 好处：不占用额外的内存空间
// 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
// 从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕


// 3. 插入排序
// 把待排序的数组分成已排序和未排序两部分，初始的时候把第一个元素认为是已排好序的
// 从第二个元素开始，在已排好序的子数组中寻找到该元素合适的位置并插入该位置（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
// 重复上述过程直到最后一个元素被插入有序子数组中

  
// 4. 归并排序  分治法   将已有序的子序列合并，得到完全有序的序列
// 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
// 设定两个指针，最初位置分别为两个已经排序序列的起始位置
// 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
// 重复步骤3直到某一指针到达序列尾
// 将另一序列剩下的所有元素直接复制到合并序列尾

// 5. 快速排序
// 快速排序是对冒泡排序算法的一种改进，基本思想是通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小

// 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列

// 解决思路如下：

// 从数列中挑出一个元素，称为"基准"（pivot）
// 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
// 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序
