import siteContents from './siteContent.js'

export default function(){
    let cta=document.querySelector('.cta')
    let CtaText=cta.querySelector('.cta-text')
    CtaText.childNodes[1].textContent=siteContents.cta.h1
    CtaText.childNodes[3].textContent=siteContents.cta.button
}

export function destroy(e){
    let ctaImage=document.querySelector('#cta-img')
    ctaImage.remove()
}

export function collapse(e){
    e.srcElement.addEventListener('mouseover',(e)=>{
        e.srcElement.style.display='none'
        let smily=document.createElement('button')
        let smilyImage=document.createElement('img')
        
        smilyImage.setAttribute('src','https://ih1.redbubble.net/image.291661880.8601/mp,550x550,matte,ffffff,t.3u1.jpg')
        smily.setAttribute('id','smily')
        document.querySelector('.main-content').appendChild(smily)
        document.querySelector('#smily').appendChild(smilyImage)
        smily.addEventListener('click',restore)
    },{once:true})
    document.querySelectorAll('.text-content').forEach(item=>item.style.display='none')
    document.querySelectorAll('img').forEach(item=>item.style.display='none')
    document.querySelector('h1').style.display='none'
    document.querySelector('nav').style.display='none'
    alert('you have hidden EVERYTHING')
}

const restore=function(e){
    document.querySelectorAll('.text-content').forEach(item=>item.style.display='block')
    document.querySelectorAll('img').forEach(item=>item.style.display='block')
    document.querySelector('h1').style.display='block'
    document.querySelector('nav').style.display='flex'
    document.querySelector('button').style.display='block'
    document.querySelector('#smily').style.display='none'
}