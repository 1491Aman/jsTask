
 let Password=()=> {
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var pwd = "";
    var size = alphabets.length;
    for (var i = 0; i <= 5; i++) {
       pwd += alphabets.charAt(Math.random() * size);
    }
    return pwd;
 }
 console.log(Password());
 
 