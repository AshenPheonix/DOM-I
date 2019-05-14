import siteContents from './siteContent.js'

export default function(){
    let foot=document.querySelector('footer')
    foot.querySelector('p').textContent=siteContents.footer.copyright
}