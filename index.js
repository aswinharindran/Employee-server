const jsonServer=require('json-server')
const EmpServer=jsonServer.create()
const middleware=jsonServer.defaults()
const PORT= 3000
const route =jsonServer.router('db.json')
EmpServer.use(middleware)
EmpServer.use(route)

EmpServer.listen(PORT,()=>{
    console.log(`EmpServer statrted at port ${PORT}`);
    
})