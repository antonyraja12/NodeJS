const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const database=require('mysql');

const add=express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));

let con=database.createConnection({
    host:'localhost',
    user:'root',
    password:'Dev@2001',
    database:'datas'
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("DB Conected sucessfully")
    }

})



add.get('/studentdet',(request,response)=>{
    let sq='select	 * from student_detailes;';
    con.query(sq,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }

    })
})
add.post('/insertdata',(request,response)=>{

    let {name,place,role,salary,dat}= request.body;
    let sq='insert into student_detailes(Name,Place,Role,Salary,DateOfJoining,status) values (?,?,?,?,?,?)';
    con.query(sq,[name,place,role,salary,dat,0],(error,res)=>{
        if(error){
            let a={status:"error"}
            response.send(a);
        }
        else{
            let b={status:"success"}
            
            response.send(b);
        }
    })
})  
add.get('/edit/:s_no',(request,response)=>{

    let {s_no}=request.params;
    let sql='select * from student_detailes where s_no=?';
    con.query(sql,[s_no],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }

    })

    
})

add.put('/updated/:s_no',(request,response)=>{
    
    let s_no=request.params.s_no;
    let {Name,Place,Role,Salary,DateofJoining}=request.body;
    let sql='update student_detailes set Name=?,Place=?,Role=?,Salary=?,DateOfJoining=? where s_no=?';
    con.query(sql,[Name,Place,Role,Salary,DateofJoining,s_no],(error,result)=>{
        if (error){
           let a= {"status":"error"};
            response.send(a);
        }
        else{
            let a={"status":"success"};
            response.send(a);
        }
    })
})

add.post('/Delete',(request,response)=>{
    let s_no =request.body.s_no;
    let sql = 'delete from student_detailes where s_no=?';
    con.query(sql,[s_no],(error,result)=>{
        if(error){
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s={"status":"success"};
            response.send(s)
        }
    })
})


add.listen(3307,()=>{console.log("server connected sucessfully on port no 3307" )});