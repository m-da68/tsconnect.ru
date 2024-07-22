<?php

    if (!isset($_COOKIE["token"])) {
        header("Location: auth");
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../images/icon.ico" type="image/x-icon">
    <title>Единый личный кабинет | ControlBase</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="js/script.js"></script>
</head>
<body>
    <div class="outer">
        <div class="middle">
            <div class="inner container">
                <div id="buttons-box">
                    <button id="btn-monitor" class="topmenu-button" onclick="showMonitor()">Монитор</button>
                    <button id="btn-settings" class="topmenu-button" onclick="showSettings()">Настройки</button>
                    <button id="btn-logout" class="topmenu-button" onclick="logout()">Выход</button>
                </div>
                <div id="page-monitor">
                    <div id="monitor">
                        <span id="monitor-text">[kernel]: Нет доступных контроллеров</span>
                    </div>
                    <div id="buttons-box">
                        <button id="btn-startMonitor" class="topmenu-button" onclick="startMonitor()">Старт</button>
                    </div>
                </div>
                <div id="page-settings" hidden>
                    
                </div>
            </div>
        </div>
    </div>
</body>
</html>