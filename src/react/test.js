import React, {Component} from 'react';

class ReactApp extends Component{


    render() {
        return(
            <div>
                <div>Hoc</div>
            </div>
        )
    }
}
export default ReactApp;


var maxSubArray = function(nums) {
    let len = nums.length;
    if (len == 0) {
        return 0;
    }
    return maxSubArraySum(nums, 0, len - 1); 
};

var maxSubArraySum = function(nums, left, right) {
    if(left === right) {
        console.log(nums[left])
        return nums[left];
    }
    let mid = Math.floor((left+right)/2);
    // let mid = left + (right - left) / 2
    return max2(maxSubArraySum(nums, left, mid), maxSubArraySum(nums, mid + 1, right), maxCrossingSum(nums, left, mid, right))
}
var max2 = function(num1, num2, num3){
    return Math.max(num1, Math.max(num2, num3));
}
var maxCrossingSum = function(nums, left, mid, right){
    let sum1 = 0, sum2 = 0;
    let leftSum = 0, rightSum = 0;
    // 以mid为边界
    for(let i = mid; i>left; i--) {
        sum1 = sum1  + nums[i];
        if (sum1 > leftSum) {
            leftSum = sum1;
        }
    }

    for(let j = mid + 1; j < right; j++) {
        sum2 = sum2 + nums[j];
        if(sum2 > rightSum) {
            rightSum = sum2
        }
    }
    console.log(leftSum + rightSum)
    return leftSum + rightSum;
}

maxSubArray([5,4,-1,7,8])