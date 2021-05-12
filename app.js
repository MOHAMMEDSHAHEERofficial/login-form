        function validform(){
        var name1 = document.myform.lname.value;
        var fname = document.myform.fname.value;
        var pass = document.myform.password.value;
        var emailids = document.myform.email.value;
    if(name1=="null" || name1==""){
      alert("name can't be empty")
      return false;
    }
    else if(fname==null || fname==""){
      alert("name can't be empty")
      return false;
    }
    else if(pass ==null || pass ==""){
      alert("name can't be empty")  
         return false;
    }
    else if(emailids ==null || emailids ==""){
      alert("name can't be empty")
      return false;
    }
    
    }