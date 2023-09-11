
    function CheckLogin() {
      var login = "admin";
      var reg = new RegExp("^" + login + "$");
      if (reg.test(document.form1.text1.value)) {
        // document.location.href = "index.html";
        var pass = "groza1";
        var reg = new RegExp("^" + pass + "$");
        if (reg.test(document.form2.text2.value)) {
          document.location.href = "index.html";

        } else {
          alert('Неверный логин или пароль');
        }
        return false;
      } else {
        alert('Неверный логин или пароль');
      }
      return false;
    }
