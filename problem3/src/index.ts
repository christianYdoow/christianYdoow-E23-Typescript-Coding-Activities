import assert from "assert";

// function endZeros(a: number): number {
//     // your code here
//     return String(a).split("").filter((zero)=>
//     zero === "0").length;

// }

const endZeros=(a:number):number=>{
    let count = 0
    while(a> 0 && a % 10 === 0){
        count++
        a=Math.floor(a/10);
    }
    return count;
}

console.log(endZeros(10));

// These "asserts" are used for self-checking
    assert.strictEqual(endZeros(1), 0);
    assert.strictEqual(endZeros(0), 1);
    assert.strictEqual(endZeros(10), 1);
    assert.strictEqual(endZeros(100), 2);
    assert.strictEqual(endZeros(1000), 3);

