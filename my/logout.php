<?php
    setcookie("authMethod","",time()-3600,"/");
    setcookie("token","",time()-3600,"/");
    header("Location: " . $_GET["redirect_url"]);
?>