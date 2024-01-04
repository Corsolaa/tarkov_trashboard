<?php

function start_data_gather()
{
    $data = getApiData();
    if (json_decode($data, true) != NULL) {
        $file = "./json/ammo_data.json";
        if (file_put_contents($file, $data)) {
            header("Location: " . "renew.php?success");
        } else {
            header("Location: " . "renew.php?error");
        }

    } else {
        header("Location: " . "renew.php?error");
    }
}

function getApiData()
{
    $headers = ['Content-Type: application/json'];

    $query = '{ammo {item {name gridImageLink inspectImageLink }damage projectileCount recoilModifier 
            accuracyModifier fragmentationChance caliber penetrationPower armorDamage }}';
    $data = @file_get_contents('https://api.tarkov.dev/graphql', false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => $headers,
            'content' => json_encode(['query' => $query]),
        ]
    ]));
    return $data;
}

if (isset($_POST["data_pass"])) {
    if ($_POST["data_pass"] === "je moeder") {
        start_data_gather();
    } else {
        header("Location: " . "renew.php?error");
    }
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="https://www.brunobouwman.nl/images/src/otter.jpg">
    <title>get data</title>

    <link rel="stylesheet" href="css/blender-font.css">
    <link rel="stylesheet" href="css/colors.css">
    <link rel="stylesheet" href="css/renew-page.css">

</head>

<body>

<main>
    <div class="content">
        Please fill in the secret password <br> to renew the tarkov API data.

        <form method="POST">
            <?php
            if (isset($_GET['success'])) { ?>
                <p class="alert success">Very niceee</p>
            <?php } elseif (isset($_GET['error'])) { ?>
                <p class="alert error">Something fucked happend</p>
            <?php } ?>
            <label for="data_pass">
                <input type="password" id="data_pass" placeholder="password" name="data_pass">
            </label>
            <input type="submit" value="SEND">
        </form>

        <a href="./tarkov" class="return_link">go back</a>
    </div>
</main>

</body>
</html>
