function getPINs(observed) {
    let keypad = [ null, null, null, null, null, null, "1", "2", "3", null, null, "4", "5", "6", null, null, "7", "8", "9", null, null, null, "0", null, null, null, null, null, null, null ];
    
    let pin = observed.split('');
    let possibleNumbers = [];
    
    for(let j = 0; j < pin.length; j++) {
        let number = pin[j];
        let index = keypad.indexOf(number);
        let left = index - 1;
        let right = index + 1;
        let up = index - 5;
        let down = index + 5;
        
        let currentNumbers = [];
        
        currentNumbers[currentNumbers.length] = number ? number.toString() : null;
        currentNumbers[currentNumbers.length] = keypad[left] ? keypad[left].toString() : null;
        currentNumbers[currentNumbers.length] = keypad[right] ? keypad[right].toString() : null;
        currentNumbers[currentNumbers.length] = keypad[up] ? keypad[up].toString() : null;
        currentNumbers[currentNumbers.length] = keypad[down] ? keypad[down].toString() : null;

        currentNumbers = currentNumbers.filter(Boolean);

        possibleNumbers.push(currentNumbers);
    }

    let results = [];

    for(let j = 0; j < possibleNumbers[0].length; j++) {
        let str = possibleNumbers[0][j];
        results = recursion(str, possibleNumbers.length, str.length, possibleNumbers, results);
    }

    function recursion(str, finalLength, currentLength, possibleNumbers, results) {
        if(str.length == finalLength) {
            results.push(str);
            return results;
        }
        for(let i = 0; i < possibleNumbers[currentLength].length; i++) {
            let currentStr = str + possibleNumbers[currentLength][i];  
            recursion(currentStr, finalLength, currentStr.length, possibleNumbers, results);
        }
        return results;
    }

    return results.sort().filter((v, i) => {
        return results.indexOf(v) === i;
    });
}
  
console.log(getPINs("369"));

let test = ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"];

console.log(test.sort());