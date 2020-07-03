function MatrixAddition(m,n,arr1,arr2){
    let a = []
    let b = []
    let c = []
    let sum = []
    let num
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            num = arr1[i][j]+arr2[i][j]
            if(i === 0){
                a.push(num)
            }else if (i === 1){
                b.push(num)
            }else if (i === 2){
                c.push(num)
            }
        }
    }
    sum.push(a)
    sum.push(b)
    sum.push(c)
    console.log(sum)
    }