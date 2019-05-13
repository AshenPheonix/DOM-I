class Timer{
    constructor(){
        this.tens=0
        this.ones=0
        this.sec=0
        this.hs=0
        this.bin=false
        this.begin=false
    }
    reboot(){
        this.tens=0
        this.ones=0
        this.sec=0
        this.hs=0
        this.bin=false
        this.begin=false
        this.read()
    }
    increment(){
        if(this.tens===1 || this.begin==false){
            return
        }

        this.hs++
        if(this.hs>9){
            this.hs=0
            this.sec++
            this.bin=true
        }
        if(this.sec>9){
            this.ones++
            this.sec=0
        }
        if(this.ones>9){
            this.tens++
            this.ones=0
        }
        this.read()
    }
    read(){
        document.querySelector('#secondTens').textContent=((this.tens===1)?this.tens:'-' )
        document.querySelector('#secondOnes').textContent=((this.bin)?this.ones:'-')
        document.querySelector('#msHundreds').textContent=this.sec
        document.querySelector('#msTens').textContent=this.hs
        if(this.tens===1){
            document.querySelectorAll('.digit').forEach(item=>item.style.color='red')
        }else{
            document.querySelectorAll('.digit').forEach(item=>item.style.color='black')
        }
    }
    boot(){
        this.begin=true
    }
    running(){
        return this.begin
    }
}

const counter=new Timer()

let __nativeSI__=window.setInterval

window.setInterval=function(cb, caller, timer){
    let intThis=caller,args=Array.prototype.slice.call(arguments,3)
    return __nativeSI__(cb instanceof Function ? function(){
        cb.apply(intThis,args)
    }:cb,timer)
}

window.setInterval(counter.increment,counter,10)

document.querySelector('#btn').addEventListener('click',(e)=>{
    if(counter.tens>0){
        counter.reboot()
    }else
        console.log(counter);
})

document.querySelector('#start').addEventListener('click',(e)=>{
    if(!counter.running()){
        counter.boot()
    }
})