var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);
    
    //run the loop leaving all the elements except last 2 elements; 
    for(let i = 0; i < nums.length-2; i++){
        if(i!==0 && nums[i] == nums[i-1]) continue;
        
        let lowIndex = i+1, highIndex = nums.length-1;
        
        while(lowIndex < highIndex){
            //check if low is equal to previously encountered low and it is not equal to current i
            if(lowIndex-1 !==i && nums[lowIndex]==nums[lowIndex-1]) {
                lowIndex++;
                continue;
            }
            // calculate
            let temp = nums[i] + nums[lowIndex] + nums[highIndex];
            if(temp > 0) highIndex--;
            
            else if(temp < 0) lowIndex++;
            
            else{
                result.push([nums[i],nums[lowIndex],nums[highIndex]]);
                lowIndex++;
                highIndex--;
            }
        }
    }
    
    return result;
};