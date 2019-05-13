import SC from "./siteContent.js";
import run from './updateNav.js';
import ctaRun, {destroy as d, collapse as c} from './updateCTA.js'
import mainRun from './mainRun.js';
import footRun from './foot.js';
import contact from './contact.js'
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', SC["nav"]["img-src"])

let call=document.getElementById('cta-img')
call.setAttribute('src', SC["cta"]["img-src"])

let middleImg=document.getElementById('middle-img')
middleImg.setAttribute('src',SC["main-content"]["middle-img-src"])

call.addEventListener('click',d)
document.querySelector('.cta-text').querySelector('button').addEventListener('click',c)

run()
mainRun()
ctaRun()
footRun()
contact()