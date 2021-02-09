const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j"
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processChunk(arr) {
    try {
        if (arr.length === 0) {
          // code that runs after the whole array is executed
        } else {
          console.log('processing chunk');
    
          const subarr = arr.splice(0, 2)
          for (const item of subarr) {
            console.log(item)
            await sleep(500)
          }
          // Put the function back in the queue
        setImmediate(() => {
            processChunk(arr)   
        })
        }

    } catch (e) {
        console.log('ERROR!!!!!!!', e)
    }
}

 setImmediate(() => {
    processChunk(letters);
    processChunk(numbers);
})