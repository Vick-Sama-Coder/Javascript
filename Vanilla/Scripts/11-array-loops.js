        function throughFunction(nums){
            let doubledArray = [];

            for(let i = 0; i < nums.length; i++){
                const num = nums[i]
                doubledArray.push(num  * 2)
            }
            
            
            return doubledArray;
        }
        throughFunction([ 2, 3, 3]);