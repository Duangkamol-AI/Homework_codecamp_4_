var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 1. GET /static -> return “Hello World” 
app.get('/static', function (req, res) {
    res.send('Hello World')
})

//2. GET /staticJSON -> return JSON of {text:”Hello World”} 
app.get('/staticJSON', function (req, res) {
    res.json({ text: 'Hello World' })
})

// 3. GET /echo?text=Heyyyy -> return any string in text variable, i.e., “Heyyyy”  
app.get('/echo', function (req, res) {
    res.send(req.query.text)
})

// 4. GET /plus?a=3&b=5 -> return the sum of a + b, i.e., 8  
app.get('/plus', function (req, res) {
    res.send((parseInt(req.query.a) + parseInt(req.query.b)).toString())
})

// 5. GET /plusByJSON?jsonText={ a:3,b:5 } -> return the sum of a+b, parsed the json object from jsonText variable, thus, it should be answer 8  
app.get('/plusByJSON', function (req, res) {
    let jsonText = req.query.jsonText
    jsonText = jsonText.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f")
        .replace(/[\u0000-\u0019]+/g, "");
    console.log(jsonText);
    jsonText = JSON.parse(jsonText)
    let a = parseInt(jsonText.a)
    let b = parseInt(jsonText.b)
    res.send((a + b).toString())
})
// 6. GET /plus/6/7 -> return the sum of 6+7, which is 13  
app.get('/plus/:a/:b', function (req, res) {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    res.send((a + b).toString())
})

// 7. GET /checkEvenNumber/3  
app.get('/checkEvenNumber/:a', function (req, res) {
    let a = parseInt(req.params.a)
    res.send((a % 2 == 0).toString())
})

// 8. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.  
app.get('/checkEvenNumber400/:a', function (req, res) {
    let a = parseInt(req.params.a)
    if (a % 2 != 0) {
        res.status(400)
        res.send('Bad Input')
    }
    res.send((a % 2 == 0).toString())
})

// 9. Return the Success (200) response code if the input number is a even.  
app.get('/checkEvenNumber200/:a', function (req, res) {
    let a = parseInt(req.params.a)
    if (a % 2 != 0) {
        res.status(400)
        res.send('Bad Input')
    } else {
        res.send('Success')
    }
})

// 10. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example  
// 11. POST /number/1 -> [1]
// 12. POST /number/2 -> [1,2]
// 13. POST /number/5 -> [1,2,5]  
let arr = []
app.post('/number/:a', function (req, res) {
    let a = parseInt(req.params.a)
    arr.push(a)
    res.send(arr)
})

// 14. DELETE /number/1, remove the number in the array  
// 15. DELETE /number/1 -> [2,5]  
// 16. DELETE /number/2 → [5]  
app.delete('/number/:a', function (req, res) {
    let a = parseInt(req.params.a)
    arr = arr.filter((element) => {
        return element !== a
    })
    res.send(arr)
})

// 17. PUT /number/5/10, change the number in the array  
// 18. PUT /number/5/10 -> [10]  
app.put('/number/:a/:b', function (req, res) {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    arr = arr.map((element) => {
        if (element === a) return b
        else return element
    })
    res.send(arr)
})

// 19. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,  
// 20. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
// 21. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4  
app.post('/countFields', function (req, res) {
    let body = req.body
    console.log(body)
    res.send(Object.keys(body).length.toString())
})

app.listen(3000)