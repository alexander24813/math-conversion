
window.onload = function(){
    const subBtn=document.getElementById("hsub");



subBtn.onclick = function() {
   
    const from=document.getElementById("from");
    const to=document.getElementById("to");
    const log=document.getElementById("log");
    const sin=document.getElementById("sin");
    const cos=document.getElementById("cos");
    const tan=document.getElementById("tan");
    const entry=document.getElementById("entry");

    const fromtxt=document.getElementById("fom");
    const totxt=document.getElementById("too");
    let out="";
    let ent ="";

       
    
    input=entry.value;
    input=input.trim();
    inrad=input*(Math.PI/180);
    if(input !== "" ){

        if(from.checked){
            console.log("from");
            
            if(log.checked){
                out=Math.pow(10, input);
                ent="antilog"
                
            }
            
            else if(sin.checked ){
                if ( input >= -1 && input<=1){
                    out=Math.asin(input)*(180/Math.PI);
                    ent="sin⁻¹"


                }else{
                    alert("INVALID INPUT Please Try Again")
                }
                
            }
            else if(cos.checked){
                if (input >= -1 && input<=1){
                    out=Math.acos(input)*(180/Math.PI);
                    ent="cos⁻¹"


                }else{
                    alert("INVALID INPUT Please Try Again")
                   
                }
                
            }
            else if(tan.checked){
                out=Math.atan(input)*(180/Math.PI);
                ent="tan⁻¹"
                
            }else{
                alert("please select required fields")
            }



        
        }else if(to.checked){
            console.log("to");

            if(log.checked ){
                if ( input >= 0){
                    out=Math.log10(input);
                    ent="log"


                }else{
                    alert("INVALID INPUT Please Try Again")
                }
                
            }
            else if(sin.checked){
                out=Math.sin(inrad);
                ent="sin"
                
            }
            else if(cos.checked){
                out=Math.cos(inrad);
                ent="cos"
                
            }
            else if(tan.checked){
                out=Math.tan(inrad);
                ent="tan"
                
            }else{
             alert("please select required fields")
            }
        
        }else{
            alert("please select required fields")
        }

    }else{
    alert("please enter a NUmber")}
fromtxt.textContent=ent+"("+input+")"; 

if(out%1==0){}
else{
out=out.toFixed(3);}
totxt.textContent=out;

}
}