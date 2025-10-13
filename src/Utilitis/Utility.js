// check the database 
const getdatalocalstoreg =()=>{
    const localstoregSTR= localStorage.getItem("doctorlist")
    
    if(localstoregSTR){
         const docdatalocalstoreg = JSON.parse(localstoregSTR)
         return docdatalocalstoreg;
    }
    else{
        return [];
    }
}

const adddatalocalstoreg =(id)=>{
    const docdatalocalstoreg = getdatalocalstoreg()
    if(docdatalocalstoreg.includes(id)){
        alert('Doctor already added in appointment')
    }
    else{
       docdatalocalstoreg.push(id)
       const data = JSON.stringify(docdatalocalstoreg)
       localStorage.setItem("doctorlist",data)
    }
}

const removedatalocalstoreg = (id) =>{
    const getdata = getdatalocalstoreg()
    const update = getdata.filter(doctor => parseInt(doctor.id) !== parseInt(id))
    localStorage.removeItem("doctorlist", JSON.stringify(update))
    return update;
}

export{adddatalocalstoreg, getdatalocalstoreg, removedatalocalstoreg}