// function transform(array) {
module.exports = function transform(array) {
    // typeof array != 'object' ? throw new Error() : false;
    if(Array.isArray(array) === false) {
        throw new Error();
    }
	if(array){
		for (let i = 0; i < array.length; i++){
            if (array[i]){
                if (array[i] == '--discard-next'){
                    array.splice(i,2);
                } 
                if (array[i] == '--discard-prev' && i > 0){
                    array.splice(i-1,2);
                } else if (array[i] == '--discard-prev'){
                    array.splice(i,1);
                }
                if (array[i] == '--double-next'){
                    array.splice(i,1);
                    array.splice(i,0,array[i]);
                }
                if (array[i] == '--double-prev' && i > 0){
                    array.splice(i,1);
                    array.splice(i,0,array[i-1]);
                } else if(array[i] == '--double-prev'){
                    array.splice(i,1);
                }
            }
		}	
    }
    //  else {
    //     throw new Error()
    // }
	return array;
};
