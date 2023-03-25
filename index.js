let carousel_div=document.getElementById("caro_body");



function carousel(){
    let images=[
        "https://www.lappymaker.com/images/expert-tecnician-for-your-macbook-banner.webp",
        "https://www.lappymaker.com/images/get-up%20to-5-year-warranty-banner.webp",
        "https://www.lappymaker.com/images/best-quality-screen-only-at-lappymaker-banner.webp"
    ];
    let imgElement=document.createElement("img");
    imgElement.style.width="100%";
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