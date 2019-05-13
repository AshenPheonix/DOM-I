import siteContent from "./siteContent.js";

export default function(){
    let nav=document.querySelectorAll('nav a')
    nav.forEach((item,index)=>{
        let temp=`nav-item-${index+1}`
        item.textContent=siteContent.nav[temp]
    })
}