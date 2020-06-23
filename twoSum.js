var twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        // console.log('comp',comp, 'i', i, 'nums[i]', nums[i])
        if(comp[nums[i] ]>=0){
            console.log( [ comp[nums[i] ] , i] )
        }
        comp[target-nums[i]] = i
    }
};

// twoSum([2,7,11,15], 9)