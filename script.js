document.addEventListener("DOMContentLoaded", function () {
    const liveScores = [
        { team1: "Team A", team2: "Team B", score: "2 - 1", time: "70'" },
        { team1: "Team C", team2: "Team D", score: "0 - 0", time: "45+'" },
        { team1: "Team E", team2: "Team F", score: "1 - 2", time: "85+'" },
        { team1: "Team G", team2: "Team H", score: "3 - 3", time: "90+'" },
    ];

    const liveScoresList = document.getElementById("liveScores");

    function renderScores() {
        liveScoresList.innerHTML = "";
        liveScores.forEach(score => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${score.team1}</strong> vs <strong>${score.team2}</strong><br>
                Score: ${score.score}<br>
                Time: ${score.time}
            `;
            liveScoresList.appendChild(li);
        });
    }

    // Initial rendering
    renderScores();

    // Simulate live updates (changing scores)
    setInterval(function () {
        liveScores.forEach(score => {
            const randomScore = Math.floor(Math.random() * 5);
            const randomTime = Math.floor(Math.random() * 90) + "'";
            score.score = `${randomScore} - ${randomScore}`;
            score.time = randomTime;
        });
        renderScores();
    }, 5000); // Update every 5 seconds (for demonstration purposes)
});
