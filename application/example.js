let dingKoa=require('./application');
let app =new dingKoa();

app.use((req,res)=>{
    res.writeHead(200);
    res.end('Hello,world')
})

app.listen(3000,()=>{
    console.log('listening on 3000');
})