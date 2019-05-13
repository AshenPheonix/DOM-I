import siteContent from "./siteContent.js";
export default function(){
    let content=document.querySelectorAll('.main-content div div')

    let first=content[0]
    first.childNodes[1].textContent=siteContent["main-content"]["features-h4"]
    first.childNodes[3].textContent=siteContent['main-content']["features-content"]

    let second=content[1]
    second.childNodes[1].textContent=siteContent["main-content"]["about-h4"]
    second.childNodes[3].textContent=siteContent["main-content"]["about-content"]

    let third=content[2]
    third.childNodes[1].textContent=siteContent["main-content"]["services-h4"]
    third.childNodes[3].textContent=siteContent["main-content"]["services-content"]

    let fourth=content[3]
    fourth.childNodes[1].textContent=siteContent["main-content"]["product-h4"]
    fourth.childNodes[3].textContent=siteContent["main-content"]["product-content"]
    
    let fifth=content[4]
    fifth.childNodes[1].textContent=siteContent["main-content"]["vision-h4"]
    fifth.childNodes[3].textContent=siteContent["main-content"]["vision-content"]
}