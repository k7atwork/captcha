#captcha

<script language="javascript">
    document.onmousedown=disableclick;

    function disableclick(event)
    {
      if(event.button==2)
       {
         alert("Right Click is Disabled");
         return false;    
       }
    }
</script>
