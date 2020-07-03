const instructorService = (app,db) =>{
     
    app.get('/instructor',(req,res) => {
        db.instructor.findAll()
        .then((result)=> res.status(200).json(result))
        .catch((err)=>{
            console.log(err)
            res.status(400).json({ ErrorMessage : err.message })
        })
    })

    app.post('/instructor',(req,res) => {
        const {name_en, name_th, academic_rank, expertise, degree} = req.body
        db.instructor.create({name_en: name_en, name_th: name_th, academic_rank: academic_rank , expertise: expertise, degree: degree})
        .then((result)=>res.status(201).json(result))
        .catch((err)=>{
            console.log(err)
            res.status(400).json({ ErrorMessage : err.message }) 
        })
    })

    app.put('/instructor/:id',(req,res) =>{   
        const {name_en, name_th, academic_rank, expertise, degree} = req.body
        const { id } = req.params
        db.instructor.update({
                name_en: (name_en ? name_en : null) , 
                name_th: (name_th ? name_th : null) ,
                academic_rank: (academic_rank ? academic_rank : null),
                expertise: (expertise ? expertise : null),
                degree: (degree ? degree : null),
            },{
                where : {
                    id: id
                }
            })
        .then((result)=>res.status(200).json(result))
        .catch((err)=>{
            console.log(err)
            res.status(400).json({ ErrorMessage : err.message }) 
        }) 
    })

    app.delete('/instructor/:id',(req,res) =>{  
        const { id } = req.params
        db.instructor.destroy({
                where : {
                    id: id
                }
             })
        .then((result)=>res.status(204).json(result))
        .catch((err)=>{
            console.log(err)
            res.status(400).json({ ErrorMessage : err.message }) 
        })
     })
    
}

module.exports = instructorService