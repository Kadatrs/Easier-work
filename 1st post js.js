let count=0
let v=document.getElementById('counting')
function addition () {
    count+=1
    v.innerText ='"'+count+'"' 
}
let c=document.getElementById('memory')
function sauv () {
    c.innerText+= ' ' + count + ' - ' 
    count=0
    v.innerText= '"'+0+'"'
}