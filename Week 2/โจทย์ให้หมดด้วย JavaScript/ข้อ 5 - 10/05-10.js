//5.Pythagorus
function Pythagorus(num1, num2) {
    let a = (Math.pow(num1, 2)).toFixed(6)
    let b = (Math.pow(num2, 2)).toFixed(6)
    let sum = Math.sqrt(parseInt(a) + parseInt(b)).toFixed(6)
    console.log(a + " + " + b + " = " + sum)
}

//6.A+B Problem
function ABProblem(num1, num2) {
    if (num1 < 0 && num1 > Math.pow(10, 9)) {
        console.log("WRONG")
        return false
    } else if (num2 < 0 && num2 > Math.pow(10, 9)) {
        console.log("WRONG")
        return false
    } else {
        console.log(num1 + num2)
    }

}

//7.Herman
function Herman(radian) {
    let a = (Math.PI * Math.pow(radian, 2)).toFixed(6)
    let b = (2 * radian * radian).toFixed(6)
    console.log(a + "|" + b)
}

//8.X2
function X2(X1, S) {
    let X2 = (S * 2) - X1
    console.log(X2)
}

//9.ABC
function ABC(array) {
    let arr1 = [array[1][0], array[0][0]]
    let arr2 = [array[1][1], array[0][1]]
    let arr3 = [array[1][2], array[0][2]]
    let sum = []
    sum.push(arr1)
    sum.push(arr2)
    sum.push(arr3)
    let sort = sum.sort()
    console.log(sort.reverse())
}

//10.Trik
function Trik(array) {
    let count = array.length
    let sum = 1
    for (i = 0; i < count; i++) {
        if (array[i] === 'A') {
            if (sum = 1) {
                sum = 2
            } else if (sum = 2) {
                sum = 1
            }
        } else if (array[i] === 'B') {
            if (sum = 2) {
                sum = 3
            } else if (sum = 3) {
                sum = 2
            }
        } else if (array[i] === 'C') {
            if (sum = 3) {
                sum = 1
            } else if (sum = 1) {
                sum = 3
            }
        }
    }
    console.log(sum)
}
