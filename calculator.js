let a = document.getElementById("input");
buttons = document.querySelectorAll("button");
let result = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML;
        //console.log(buttonText);

        if(buttonText=='AC')
        {
            result="";
            a.value=result;

        }
        else if(buttonText=='X')
        {
            buttonText='*';
            result+=buttonText;
            a.value=result;

        }
        else if(buttonText=='=')
        {
            a.value=eval(result);
        }
        else{
            result+=buttonText;
            a.value=result;

        }



    
        
    })
}