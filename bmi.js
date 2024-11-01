function fun()
{
    let a=document.getElementById("i1").value;
    let b=document.getElementById("i2").value;
    if(a =="")
    {
        alert("All The Fields Must Be Filled ");
        return false;
    }
    else if(b=="")
    {
        alert("All The Fields Must Be Filled ");
        return false;
    }
   else
    {
     let b1=b*0.3048;    
    let c=a/(b1*b1);
    
     if(c<16.0)
     {
        alert("severly underweigth"+" "+c);
     }
     else if(c>16.1&&c<18.4)
     {
        alert("underweight"+" "+c);

     }
     else if(c>18.5&&c<24.9)
     {
        alert("normal"+" "+c);

     }
     else if(c>25.0&&c<29.9)
     {
        alert("overweigth"+" "+c);

     }
     else if(c>30.0&&c<34.9)
     {
        alert("moderately obese"+" "+c);

     }
     else if(c>35.0&&c<39.9)
     {
        alert("severely obese"+" "+c);

     }
     else{
        alert("morbidly obese"+" "+c);
     }

    }
}



