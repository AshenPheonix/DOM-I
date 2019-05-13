import siteContents from './siteContent.js'

export default function(){
    let contact = document.querySelector('.contact')
    let content=siteContents.contact
    contact.querySelector('h4').textContent=siteContents.contact["contact-h4"]
    contact.querySelectorAll('p').forEach((item,index)=>{
        switch(index){
            case 0:
                item.textContent=content.address
                break;
            case 1:
                item.textContent=content.phone
                break;
            case 2:
                item.textContent=content.email
                break;
        }
    })
}