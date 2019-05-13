import siteContent from "./siteContent.js";

export default function(){
    let nav=document.querySelectorAll('nav a')
    nav.forEach((item,index)=>{
        
        let temp=`nav-item-${index+1}`
        item.textContent = siteContent.nav[temp]
        
        item.style.color='green'
    })

    let anchors=[document.createElement('a'),document.createElement('a')]
    anchors[0].textContent="NOOOOOO"
    anchors[1].textContent="YESSSSS"
    anchors.forEach(item=>{
        item.color='slategrey'
        item.setAttribute('href','#')
    })
    
    nav[0].parentElement.prepend(anchors[0])
    nav[0].parentElement.appendChild(anchors[1])
}