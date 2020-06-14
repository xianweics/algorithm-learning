// 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 时间复杂度：n*n
// 空间复杂度：1
var maxArea = function(height) {
    let max = 0;
    let area = 0;
    for(let i=0; i<height.length-1; i++){
        for(let j=1; j<height.length; j++){
            area = Math.min(height[i], height[j]) * (j-i);
            max = Math.max(area, max);
        }
    }
    return max;
};