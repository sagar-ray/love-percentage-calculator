document.querySelector("#remove").addEventListener("click", function(){
    document.querySelector("#result").style.transform='scale(0)';
})

document.querySelector("#alt-remove").addEventListener("click", function(){
    document.querySelector("#alert").style.transform='scale(0)';
}) 

let Yname = document.querySelector("#Yname");
let Pname = document.querySelector("#Pname");
let submit = document.querySelector("#submit");
let clear = document.querySelector("#clear");

let alert_mes = document.querySelector("#alert p");

let result = document.querySelector("#result");
let remove = document.querySelector("#remove");
let cong = document.querySelector("#cong");
let mes = document.querySelector("#mes");

submit.addEventListener("click", function(){

    if( Yname.value == ''){
        document.querySelector("#alert").style.transform='scale(1)';
        alert_mes.innerText="Please Enter Your Name";
    }else if( Pname.value == ''){        
        document.querySelector("#alert").style.transform='scale(1)';
        alert_mes.innerText="Please Enter Your Partner Name";
    }else{

        let random = Math.floor( Math.random() * 100 + 1 );
        cong.append( "Congratulations "+Yname.value+"," );
        mes.append( Yname.value +" + "+ Pname.value +" = "+random+"%" );
        document.querySelector("#result").style.transform='scale(1)';
        Yname.value='';
        Pname.value='';
    }

    

})

clear.addEventListener("click", function(){
    Yname.value='';
    Pname.value='';
})

