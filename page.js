let messs=document.getElementById("req");
let submit=document.getElementById("cli");


submit.addEventListener("click",()=>{
   // alert("hello");
   console.log(messs.value);
   let mene={
    messagena:messs.value
   }
    
console.log("mene",mene);

  let down=async()=>{
    try {
        let res=fetch("http://localhost:3000/notice",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mene),
        })
    } catch (err) {
        console.log("err",err);
    }
  }

  down();
})