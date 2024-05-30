// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.







/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let intersection = [...set1].filter(item => set2.has(item))

    return intersection
};