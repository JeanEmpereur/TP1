
class RequeteUser {
  constructor() {
    this.url = "http://127.0.0.1:3000";
  }

  getUser(id_user){
    var settings = {
      "url": this.url + "/user/" + id_user,
      "method": "GET"
    };
    $.ajax(settings).done((response) => {
      this.showText(response, "one-user");
    });
  }

  // getAllUser(){
  //     var settings = {
  //         "url": this.url + "/users",
  //         "method": "GET"
  //     };
  //     $.ajax(settings).done(function (response) {
  //         checkUser(response);
  //     });
  // }

  loginUser(){
    var data = {
      password: document.getElementById("champsPassword").value,
      email: document.getElementById("champsEmail").value
    };
    // Config la route d'envoie des infos :
    var settings = {
      url: this.url + "/users/login",
      method: "POST",
      ContentType: "application/json",
      data: data
    };
    // Envoie la requete :
    $.ajax(settings).done((response) => {
      console.log(response);
      window.location.href = "index.html";
    });
    //Reinitialise les valeurs a 0 :
    document.getElementById("champsPassword").value = "";
    document.getElementById("champsEmail").value = "";
  }

  checkUser(response)    {
      console.log("check");
      var connecte = false;
      for(let i = 0; i < response.length; i++)    {
          if ($("#email").val() == response[i].email && $("#pwd").val() == response[i].password)   {
              console.log("login successfull");
              var connecte = true;
              //sessionStorage.setItem("userconnected", response[i].nomdecompte);
              window.location.href = "index.html";
          } else {
              console.log("wrong password or email");
          }
      }
      if(connecte == false){
          alert("Wrong password or email !")
      }
  }

  // deleteUser(id_user){
  //   var settings = {
  //     "url": this.url + "/user/" + id_user,
  //     "method": "DELETE"
  //   };
  //   $.ajax(settings).done((response) => {
  //     window.location.href = "connection.html";
  //   });
  // }

  addUser(){
    let pwd = document.getElementById("champsPassword").value;
    let pwd2 = document.getElementById("champsPassword2").value;
    // if (pwd != pwd2) {
    //   alert("Les 2 mots de passe doivent être identiques !");
    //   return;
    // }
    var data = {
      password: pwd,
      email: document.getElementById("champsEmail").value
    };
    // Config la route d'envoie des infos :
    var settings = {
      url: this.url + "/users/register",
      method: "POST",
      ContentType: "application/json",
      data: data
    };
    // Envoie la requete :
    $.ajax(settings).done((response) => {
      console.log(response);
      window.location.href = "index.html";
    });
    //Reinitialise les valeurs a 0 :
    document.getElementById("champsPassword").value = "";
    document.getElementById("champsPassword2").value = "";
    document.getElementById("champsEmail").value = "";
  }
}

var requete = new RequeteUser();
// let songButton = document.getElementById('getSongButton');
// songButton.addEventListener('click', function () {requete.getSong()});

$("#connect").click(function()  {
  console.log("click");
  requete.getAllUser();
});
