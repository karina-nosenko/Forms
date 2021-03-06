<!DOCTYPE html>
<html>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
        
        <script src="js/scripts.js"></script>
        <link rel="stylesheet" href="css/style1.css">
        <meta charset="UTF-8">
        <title>Forms</title>
    </head>

    <body id="php">
        <div id="phpWrapper">
            <section>
                    <?php
                        echo "<h1>Congratulations ".$_GET["name"]."! You did it!</h1>"; 
                    ?>
                    <p>
                        We saved your name, e-mail and phone number in our databases.<br>
                        Now we can send you spam and make phone calls in the middle of the night!🌈
                    </p>
                    <fieldset>
                        <legend>Fact of the day</legend>
                        <p>
                            Toru Iwatani (the creator of the PacMan) while eating a pizza, looked down at the pie with a missing slice and used the outline as inspiration for Pac-Man's distinctive shape.
                        </p>
                    </fieldset>
            </section>

            <div id="pacman">
                <div id="eye"></div>
                <div id="mouth"></div>
                <div id="semiClosed">
                    <div id="square"></div>
                </div>
            </div>
            <div id="foodContainer">
                <div class="food" id="eated"></div>
                <div class="food"></div>
                <div class="food"></div>
                <div class="food" id="extra"></div>
            </div>

            <script>
                setInterval(dinner, 160);
            </script>
        </div>
    </body>
</html>