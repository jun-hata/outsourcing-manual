# マニュアル閲覧 PIN

PINを入力してください。

<input 
  id="pin"
  type="password"
  placeholder="PINを入力"
  style="padding:10px;font-size:16px;width:250px"
  onkeydown="if(event.key === 'Enter'){ checkPin(); }"
>

<br><br>

<button onclick="checkPin()" style="padding:10px 20px;font-size:16px;">
入室
</button>

<p id="error" style="color:red;display:none;">PINが違います</p>

<script>

const PASSWORD = "re0316";
const AUTH_KEY = "manual_auth_ok";

function checkPin(){

  const input = document.getElementById("pin").value.trim();

  if(input === PASSWORD){

    sessionStorage.setItem(AUTH_KEY,"true");

    window.location.replace("/");

  }else{

    document.getElementById("error").style.display="block";

  }

}

</script>