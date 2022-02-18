var form = document.getElementById("form");
var error = document.getElementsByClassName("error");
function isSubmit() {
        var username = document.getElementById("user-name").value;
        var mobileNumber = document.getElementById("mobile-number").value;
var pinCode = document.getElementById("pin-code").value;
var flat = document.getElementById("flat").value;
var area = document.getElementById("area").value;
var landmark = document.getElementById("landmark").value;
        for(let i=0; i<error.length; i++)
        {
              error[i].innerHTML="";
        }
        if (username.length < 4) {
                error[0].innerHTML+= "Name is too short";
                return false;
        }
        if(!checkNumber(mobileNumber))
        {
                error[1].innerHTML+="Wrong Number";
                return false;
        }
        if(!checkPin(pinCode))
        {
               error[2].innerHTML+="Wrong Pincode";
               return false;
        }
        if (flat.length < 4) {
                error[3].innerHTML+= "flat name is too short";
                return false;
        }
        if (area.length < 4) {
                error[4].innerHTML+= "Area name is too short";
                return false;
        }
        if (landmark.length < 4) {
                error[5].innerHTML+= "Landmark name is too short";
                return false;
        }
        
        return true;
}
function checkNumber(n)
{
        if(n.length!=10)
           return false;
        for(let i=0; i<n.length; i++)
        {
                if(n[i].toUpperCase()!=n[i].toLowerCase())
                {
                        return false;
                }
        }
        return true;
}
function checkPin(n)
{
        if(n.length!=6)
           return false;
           for(let i=0; i<n.length; i++)
           {
                   if(n[i].toUpperCase()!=n[i].toLowerCase())
                   {
                           return false;
                   }
           }
           return true;   
}
