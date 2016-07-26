#captcha

<script type="text/javascript">

 function captchaRefresh()
{
  submitAction_win0(document.win0,'G_FORM_TTLE_WRK_REFRESH_ICN');
}

function captchaTimer()
{
  setTimeout(function() {captchaRefresh();}, 25000);
}

function addLoadEvent(func) 
{
  var oldonload = window.onload;

//if (typeof window.onload != 'function')  
  if (typeof oldonload != 'function') 
  {
    window.onload = func;
  } 
  else 
  {
//   window.onload = function()
//   {
//    if (oldonload) 
//    {
//      oldonload();
//    }
//    func();
//   }
  }
}
  
window.onload = addLoadEvent(captchaTimer());

</script>
