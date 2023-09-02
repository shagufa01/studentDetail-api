import express from 'express'

const app = express();

app.use(express.json())

const db = {
    students : [
    {
        Id:"1",
        Name:"Shagufa",
        City:"Jamshedpur",

    },
    {
        Id:"2",
        Name:"Jenny",
        City:"Bangalore",

    },
    {
        Id:"3",
        Name:"Daniel",
        City:"Mumbai",

    },
]
} 

app.get('/allStudents',(req,res) => {
    res.status(201).json(db.students)
})

app.get('/singleStudent/:id',(req,res) => {
     const Id = parseInt(req.params.id)
     const singleStudent = db.students.find((studentId) => 
     studentId.Id == Id
     )
       
     if(singleStudent) {
       res.status(201).json(singleStudent)
     } else {
        res.status(404).json({
            data : {
                message : "Student Id not found"
            }
        })
     }
    
})

app.post(('/addStudent'),(req,res) => {
    const {Id, Name, City} = req.body
    const addStudent = {
        Id, Name, City
    }

    db.students.push(addStudent);
    
    res.status(201).json({
        data : {
            message : "new student detail added successfully"
        }
    })


})




app.listen(3000,() => {
    console.log("server is running on the port 3000");
})