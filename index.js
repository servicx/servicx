let carousel_div=document.getElementById("caro_body");
let form=document.getElementById("lead");
let noticeBr1=document.querySelector(".noticeBr");




function carousel(){
    let images=[
        "https://www.lappymaker.com/images/expert-tecnician-for-your-macbook-banner.webp",
        "https://www.lappymaker.com/images/get-up%20to-5-year-warranty-banner.webp",
        "https://www.lappymaker.com/images/best-quality-screen-only-at-lappymaker-banner.webp",
        "https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
    ];
    let imgElement=document.createElement("img");
    imgElement.style.width="100%";
    imgElement.style.height="100%";
    imgElement.style.borderRadius="2%";
    imgElement.style.border="0px solid red";

    let i=1;
    setInterval(function(){
        if(i==images.length){
            i=0;
        }
        imgElement.src=images[i];
        carousel_div.append(imgElement);
        i++;
    },2000);
}
carousel();

/*https://cors-anywhere.herokuapp.com  */
 /* second: https://script.google.com/macros/s/AKfycbwozbgLpdChXQ7ColHQlNCsely-Mj2JWV2wNreqXYrxRrrqxArEuQNjp8PeYVj9AdpLKA/exec  */
 //const scriptURL='/http://script.google.com/macros/s/AKfycbwozbgLpdChXQ7ColHQlNCsely-Mj2JWV2wNreqXYrxRrrqxArEuQNjp8PeYVj9AdpLKA/exec';
 //const form= document.forms['google-sheet'];
 form.addEventListener("submit",function(e){
    e.preventDefault();
    document.querySelector("#sub").value="Submitting...";

    let formData={
        name:form.name.value,
        email:form.email.value,
        mobile:form.mobile.value,
        message:form.message.value,
        date:form.date.value
    }
    console.log("f",formData);

    let data=new FormData(form);
    const leadServer=async()=>{
        fetch("https://script.google.com/macros/s/AKfycbyOyElxeCIEiPWAIGR-MVyBXurWAE3RxRpg6F6sfz4sTCRSsBR5pkhAqobtnZbhTd101w/exec",{
            method:"POST",
            body:data
        })
                .then(res=> res.text())
                .then(data=>{
                    document.querySelector("#msg").innerHTML=data;
                    document.querySelector("#sub").value="Submit"
                }) 

    }
    leadServer();
   
    
    const lead=async()=>{
        console.log("see",formData);
       fetch("http://localhost:3000/leads",{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json",
        },
       });
       
    }
    lead();
       

    //    fetch(scriptURL,{
    //     method:"POST",
    //     body:new FormData(form)
    //    })
    //    .then(response =>alert("Thanks for contacting us..! We will contact you soon ..."))
    //    .catch(error=> console.error('Error !',error.message))
    //}
    // lead();
});


let getdata=async()=>{
    try {
        let res=await fetch("http://localhost:3000/notice");
        let data=await res.json();
        console.log("we",data);
        foo(data);
    } catch (errr) {
        console.log("errr",errr);
    }
}
getdata();

const foo=(data)=>{
    console.log("fin",data);
    noticeBr1.innerHTML=null;
    data.forEach(function(ele) {
       
        console.log(ele);
        // let div=document.createElement("div");
       
        let card=document.createElement("div");
        card.style.height="fit-content";
        let massa=document.createElement("p");
        massa.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";
        massa.style.fontSize="30px";
        
        massa="*"+"  "+ele.messagena;
       
        card.append(massa);
        console.log(card)
        // div.append(card);
        noticeBr1.append(card);
    });
}


/*
const scriptURL=`https://cors-anywhere.herokuapp.com/ https://script.google.com/macros/s/AKfycbwyYq5UUIaQci4Okj4QPH0nqFF3gEmWKRRGqjPh6UXYhA4aVaM82mB2l-RCAvZKahEI/exec`;
    const form= document.forms['google-sheet'];

    form.addEventListener('submit',e=>{
        e.preventDefault();
        console.log("scform",form)
        fetch(scriptURL,{
            method:'POST',
            body:new FormData(form),
            headers:{
                "Content-Type":"application/json",
            },
           })
           .then(response =>alert("Thanks for contacting us..! We will contact you soon ..."))
       .catch(error=> console.error('Error !',error.message))
    })

    
const getData=()=>{
    console.log("script",scriptURL);
    fetch(scriptURL,{
        method:"POST",
        body:new FormData(form)
       })
       .then(response =>alert("Thanks for contacting us..! We will contact you soon ..."))
       .catch(error=> console.error('Error !',error.message))
}

//console.log("see",formData);
*/