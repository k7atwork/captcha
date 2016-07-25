#captcha

<script type="text/javascript">

function captchaRefresh()
{
 submitAction_win0(document.win0,'_FORM_TTLE_WRK_REFRESH_ICN');
}

function captchaTimer()
{
 setTimeout(function() {captchaRefresh();}, 5000);
}

window.onload = captchaTimer();

</script>
