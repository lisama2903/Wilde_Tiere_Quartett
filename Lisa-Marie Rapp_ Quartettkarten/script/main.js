$(document).ready(function () {
    const categories = {};
    const groupColors = {
        "Giftig und infektiös": "hsl(0, 70%, 60%)",
        "Reptilien": "hsl(60, 70%, 60%)",
        "Meeresbewohner": "hsl(120, 70%, 60%)",
        "Raubtiere": "hsl(180, 70%, 60%)",
        "Meeresgiganten": "hsl(240, 70%, 60%)",
        "Großsäuger": "hsl(300, 70%, 60%)",
        "Landsäugetiere": "hsl(30, 70%, 60%)",
        "Vögel": "hsl(90, 70%, 60%)",
        "Säugetiere": "hsl(150, 70%, 60%)"
    };

    let isUngroupedView = false;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function getColorForGroup(group) {
        return groupColors[group] || "hsl(0, 0%, 50%)"; //Falls keine Farbe zu finden ist, dann schwarz oder
    }

    function startGame() {
        console.log("Das Spiel hat begonnen!");
    }

    function showUngroupedCards() {
        $('#cards-container').empty();
        shuffle(data);
        data.forEach(animal => {
            const imageName = animal.name_german.toLowerCase().replace(/\s+/g, ' ');
            const color = "hsl(0, 0%, 50%)"; // Dunkleres Grau

            const animalDiv = $(`
                <div class="card-wrapper">
                    <div class="card-inner">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="card-title">${animal.name_german}</div>
                            </div>
                            <img src="images/${imageName}.png" alt="${animal.name_german}" class="card-image" />
                            <div class="card-trivia" style="background-color: ${color}; color: white;">${animal.trivia_german}</div>
                            <div class="card-statistics">
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Maximales Gewicht">Gewicht</span>
                                    </div>
                                    <div class="stat-value">${animal.max_weight}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Maximale Größe">Länge</span>
                                    </div>
                                    <div class="stat-value">${animal.max_length}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Maximales Alter">Alter</span>
                                    </div>
                                    <div class="stat-value">${animal.max_age}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Geschwindigkeit">Geschwindigkeit</span>
                                    </div>
                                    <div class="stat-value">${animal.top_speed}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Wurfgröße pro Jahr">Wurfgröße</span>
                                    </div>
                                    <div class="stat-value">${animal.litter_size}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Verursachte menschliche Opfer pro Jahr">Todesopfer</span>
                                    </div>
                                    <div class="stat-value">${animal.deaths}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-back" style="background-color: white;">
                            <div class="card-back-title">Wilde Tiere Quartett</div>
                        </div>
                    </div>
                </div>
            `);
            $('#cards-container').append(animalDiv);

            animalDiv.addClass('flipped');
        });

        setTimeout(function() {
            $('.card-wrapper').removeClass('flipped');
        }, 1000);
    }

    function showGroupedCards() {
        $('#cards-container').empty();
        shuffle(data);
        data.forEach(animal => {
            const imageName = animal.name_german.toLowerCase().replace(/\s+/g, ' ');
            const newId = `${animal.group}${animal.id}`;
            const group = animal.groupname_german;
            const color = getColorForGroup(group);

            const animalDiv = $(`
                <div class="card-wrapper">
                    <div class="card-inner">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="card-number" style="color: ${color}">${newId}</div>
                                <div class="card-title">${animal.name_german}</div>
                            </div>
                            <img src="images/${imageName}.png" alt="${animal.name_german}" class="card-image" />
                            <div class="card-trivia" style="background-color: ${color}; color: white;">${animal.trivia_german}</div>
                            <div class="card-statistics">
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Maximales Gewicht">Gewicht</span>
                                    </div>
                                    <div class="stat-value">${animal.max_weight}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Maximale Größe">Länge</span>
                                    </div>
                                    <div class="stat-value">${animal.max_length}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Maximales Alter">Alter</span>
                                    </div>
                                    <div class="stat-value">${animal.max_age}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Geschwindigkeit">Geschwindigkeit</span>
                                    </div>
                                    <div class="stat-value">${animal.top_speed}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                       <span title="Wurfgröße pro Jahr">Wurfgröße</span>
                                    </div>
                                    <div class="stat-value">${animal.litter_size}</div>
                                </div>
                                <div class="statistics-pair">
                                    <div class="stat-name" style="color: ${color}">
                                        <span title="Verursachte menschliche Opfer pro Jahr">Todesopfer</span>
                                    </div>
                                    <div class="stat-value">${animal.deaths}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-back" style="background-color: white;">
                            <div class="card-back-title">Wilde Tiere Quartett</div>
                        </div>
                    </div>
                </div>
            `);
            $('#cards-container').append(animalDiv);

            animalDiv.addClass('flipped');
        });

        setTimeout(function() {
            $('.card-wrapper').removeClass('flipped');
        }, 1000);
    }

    function showOverlay() {
        const overlay = $(`
            <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); color: white; display: flex; justify-content: center; align-items: center; z-index: 1000;">
                <div style="text-align: center;">
                    <p>Du hast die Qual der Wahl: Wähle mit Bedacht – nur 10 Karten dürfen in dein Quartett-Deck!</p>
                    <button id="closeOverlayButton" style="padding: 10px 20px; font-size: 16px;">OK</button>
                </div>
            </div>
        `);
        $('body').append(overlay);

        $('#closeOverlayButton').click(function() {
            $('#overlay').remove();
        });
    }

    $('#gameInfo').hide(); //Ausgeblendet

    //Info-Button
    $('#infoButton').click(function() {
        $('#gameInfo').fadeIn(); //Overlay anima
    });

    //Close-Button
    $('.close-button').click(function() {
        $('#gameInfo').fadeOut(); //Overlay schließen
    });

    shuffle(data);

    data.forEach(animal => {
        const imageName = animal.name_german.toLowerCase().replace(/\s+/g, ' ');
        const newId = `${animal.group}${animal.id}`;
        const group = animal.groupname_german;
        const color = getColorForGroup(group);

        const animalDiv = $(`
            <div class="card-wrapper">
                <div class="card-inner">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="card-number" style="color: ${color}">${newId}</div>
                            <div class="card-title">${animal.name_german}</div>
                        </div>
                        <img src="images/${imageName}.png" alt="${animal.name_german}" class="card-image" />
                        <div class="card-trivia" style="background-color: ${color}; color: white;">${animal.trivia_german}</div>
                        <div class="card-statistics">
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                    <span title="Maximales Gewicht">Gewicht</span>
                                </div>
                                <div class="stat-value">${animal.max_weight}</div>
                            </div>
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                   <span title="Maximale Größe">Länge</span>
                                </div>
                                <div class="stat-value">${animal.max_length}</div>
                            </div>
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                   <span title="Maximales Alter">Alter</span>
                                </div>
                                <div class="stat-value">${animal.max_age}</div>
                            </div>
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                    <span title="Geschwindigkeit">Geschwindigkeit</span>
                                </div>
                                <div class="stat-value">${animal.top_speed}</div>
                            </div>
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                   <span title="Wurfgröße pro Jahr">Wurfgröße</span>
                                </div>
                                <div class="stat-value">${animal.litter_size}</div>
                            </div>
                            <div class="statistics-pair">
                                <div class="stat-name" style="color: ${color}">
                                    <span title="Verursachte menschliche Opfer pro Jahr">Todesopfer</span>
                                </div>
                                <div class="stat-value">${animal.deaths}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-back" style="background-color: white;">
                        <div class="card-back-title">Wilde Tiere Quartett</div>
                    </div>
                </div>
            </div>
        `);
        $('#cards-container').append(animalDiv);

        animalDiv.addClass('flipped');
    });

    setTimeout(function() {
        $('.card-wrapper').removeClass('flipped');
    }, 1000);

    let flipCount = 0;

    //Karten-Klick-Handler
    $(document).on('click', '.card-wrapper', function () {
        if ($(this).hasClass('flipped') && flipCount < 10) {
            $(this).removeClass('flipped'); // Karte umdrehen
            flipCount++;
        }
    });

    //Start-Button
    $('#startButton').click(function() {
        showOverlay();
        $('.card-wrapper').addClass('flipped');
        flipCount = 0; 
    });

    //Reset-Button
    $('#resetButton').click(function() {
        $('.card-wrapper').removeClass('flipped');
        flipCount = 0; 
    });

    //Ohne Gruppierung Button
    $('#ungroupedButton').click(function() {
        if (isUngroupedView) {
            showGroupedCards();
            $('#ungroupedButton').text('Karten ohne Gruppierung');
        } else {
            showUngroupedCards();
            $('#ungroupedButton').text('Zurück');
        }
        isUngroupedView = !isUngroupedView;
    });
});