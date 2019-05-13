import siteContents from './siteContent.js'

export default function(){
    let cta=document.querySelector('.cta')
    let CtaText=cta.querySelector('.cta-text')
    CtaText.childNodes[1].textContent=siteContents.cta.h1
    CtaText.childNodes[3].textContent=siteContents.cta.button
}