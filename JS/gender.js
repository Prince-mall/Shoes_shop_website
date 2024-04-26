function hidefilter(Filename){
    var x=document.getElementById(Filename);
    var y=document.getElementById('arrow')
    if(x.style.display=='none'){
    x.style.display="block";
    }
    else{
    x.style.display="none";
    }
}
function hidearrow(Filename,arrowname){
    var x=document.getElementById(Filename);
    var y=document.getElementById(arrowname)
    if(x.style.display=='none'){
    x.style.display="block";
    y.setAttribute('class',"fas fa-angle-up")
    }
    else{
    x.style.display="none";
    y.setAttribute('class',"fas fa-angle-down")
    }
}
function ChangeImg(Filename,Idname){
    let img= document.getElementById(Idname);
    img.setAttribute('src',Filename)
}
function changetext(Filename,y){
    var x=document.getElementById(Filename);
    if(y==0){
    x.style.display="block";
    }
    else{
    x.style.display="none";
    }
}