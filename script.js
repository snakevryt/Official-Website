<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://kit.fontawesome.com/46f9fedacb.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Vr Games Website</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="pride-loader.css">
    <script src="pride-loader.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
<div id="loader" class="loader-container">
    <div class="flag">
        <div class="red"></div>
        <div class="orange"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="purple"></div>
        <div class="loader-text">Glitched Studios On Top</div>
    </div>
</div>
<div class="RayanPiracy">
    <div class="button-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScAJmQgDjvMNH2jaaVvIoiy0_q1utINgeBLLfXyawG7eooc3Q/viewform?embedded=true" class="request-button">Request</a>
        <!-- Add Discord invite link here -->
        <a href="https://discord.gg/rSZbnmfvvY" target="_blank" class="discord-button">
            <i class="fa-brands fa-discord"></i>
        </a>
    </div>
    <br>
    <h1>Welcome to Glitched Studios Free Vr Games</h1>
    <div class="instructions">
        <p>Click on the game name below to download the game:</p>
    </div>

    <div class="game-links">
    <div class="search-container">
        <input type="text" id="game-search" placeholder="Search games">
    </div>
        <ul>
          <ul>
            <li><a href='https://gofile.io/d/p3jNHh' download>Blade And Sorcey</a></li>
            <li><a href='https://gofile.io/d/pOUbh1' download>Bonelab</a></li>
            <li><a href='https://gofile.io/d/NglxLw' download>Job Sim</a></li>
            <li><a href='https://gofile.io/d/Mk36Zg' download>Druken Bar Fight</a></li>
            <li><a href='https://gofile.io/d/wXZuqQ' download>Kill It With Fire</a></li>
            <li><a href='https://gofile.io/d/4i49nl' download>Blade And Sorcey With Mods</a></li>
            <li><a href='https://gofile.io/d/yddKVu' download>Beat Saber</a></li>
            <li><a href='https://gofile.io/d/RE6Kz5' download>Paint The Town Red Vr</a></li>
            <li><a href='https://gofile.io/d/m1KFdk' download>Floor Plan Remastered</a></li>
            <li><a href='https://gofile.io/d/80I76i' download>Floor Plan 2</a></li>
            <li><a href='https://gofile.io/d/obzpMo' download>Battle Glide</a></li>
            <li><a href='https://gofile.io/d/uztSGR' download>GORN</a></li>
            <li><a href='https://gofile.io/d/YQCDL6' download>Battle Talent</a></li>  
      <!-- Keep Links Above These comments-->
       <!-- Gamelink Template below -->
  <!--  <li><a href='' download>Game Name</a></li> -->

          </ul>
          <p id="no-matching-games" style="display: none;">No games available. Please try and request it.</p>
              </div>

              <h1>Massive credits to VRPirates for making this possible! <br> Without them, no one would be able to play pirated VR games</h1>
                <h2>Thanks To Rayan For YOU know coding this :3 ( I stole the code ) </h2>
          </div>

          <script>
              $(document).ready(function () {
                  // Function to update the displayed games based on the search input
                  function updateGameList(searchTerm) {
                      var gameLinks = $(".game-links ul li a");
                      var noMatchingGames = true;

                      gameLinks.each(function () {
                          var gameTitle = $(this).text().toLowerCase();
                          if (gameTitle.includes(searchTerm)) {
                              $(this).parent().show(); // Show the <li> element
                              noMatchingGames = false;
                          } else {
                              $(this).parent().hide(); // Hide the <li> element
                          }
                      });

                      if (noMatchingGames) {
                          $("#no-matching-games").show();
                      } else {
                          $("#no-matching-games").hide();
                      }
                  }

                  // Initial update to display all games
                  updateGameList('');

                  // Listen for input changes in the search field
                  $("#game-search").on("input", function () {
                      var searchTerm = $(this).val().toLowerCase();
                      updateGameList(searchTerm);
                  });
              });
          </script>

          </body>
          </html>