
const data = [
    [
      100,
      "tdubois",
      "https://cdn.intra.42.fr/users/tdubois.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        100
      ]
    ],
    [
      100,
      "jfarkas",
      "https://cdn.intra.42.fr/users/jfarkas.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        100
      ]
    ],
    [
      100,
      "brenaudo",
      "https://cdn.intra.42.fr/users/brenaudo.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        100
      ]
    ],
    [
      100,
      "aderouba",
      "https://cdn.intra.42.fr/users/aderouba.jpg",
      0,
      100,
      1,
      0,
      "3/1",
      [
        9,
        null,
        null,
        100
      ]
    ],
    [
      84,
      "zhabri",
      "https://cdn.intra.42.fr/users/zhabri.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        84
      ]
    ],
    [
      84,
      "vviovi",
      "https://cdn.intra.42.fr/users/vviovi.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        84
      ]
    ],
    [
      84,
      "vnadal",
      "https://cdn.intra.42.fr/users/vnadal.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        11,
        100,
        100,
        84
      ]
    ],
    [
      84,
      "rvinour",
      "https://cdn.intra.42.fr/users/rvinour.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        11,
        70,
        70,
        84
      ]
    ],
    [
      84,
      "njegat",
      "https://cdn.intra.42.fr/users/njegat.jpg",
      0,
      100,
      1,
      0,
      "1/1",
      [
        9,
        100,
        100,
        84
      ]
    ]
  ]
  

const rankingsBody = document.querySelector("#rankings > tbody");
console.log("saucisse!");

// function loadRankings () {
//    /* const request = new XMLHttpRequest();

  

//     };
//     request.send();*/
//     return (JSON.parse("mabite.json"))
// }

// console.log(loadRankings());


function populateRankings (data) {
    // Populate Leaderboard
    let count = 1;
    let count2 = 0;
    data.forEach((row) => {
        console.log("saucisse"+ count);
        const tr = document.createElement("tr");

        // RANK
        const rank = document.createElement("td");
        rank.textContent = count;
        count++;
        tr.appendChild(rank);

        // SCORE
        const score = document.createElement("td");
        if (count < 5)
            score.innerHTML = '<div class="container"> <div class="progressbar-wrapper"><div class="progressbar stripes animated">'+row[0]+'%</div></div></div>';
        else
        score.innerHTML = '<div class="container"> <div class="progressbar-wrapper"><div class="progressbar">'+row[0]+'%</div></div></div>';
        score.querySelector('.progressbar').style="width:"+row[0]+"%";
        tr.appendChild(score);

        // LOGIN
        const login = document.createElement("td");
        login.textContent = row[1];
        tr.appendChild(login);

        // ODDS
        const odds = document.createElement("td");
        odds.textContent = row[7];
        tr.appendChild(odds);

        // INFOS
        const infos_data = row[8];
        const infos = document.createElement("td");
        const infos_C = document.createElement("div");
        infos_C.textContent = "Last Day: C"+infos_data[0];
        infos.appendChild(infos_C);
        const infos_exam01 = document.createElement("div");
        infos_exam01.textContent = "Exam 00: "+infos_data[1];
        infos.appendChild(infos_exam01);
        const infos_exam02 = document.createElement("div");
        infos_exam02.textContent ="Exam 01: "+infos_data[2];
        infos.appendChild(infos_exam02);
        const infos_exam03 = document.createElement("div");
        infos_exam03.textContent = "Exam 02: "+infos_data[3];
        infos.appendChild(infos_exam03);
        infos.classList.add('infos');

        tr.appendChild(infos);

        // PHOTO

        const photo_url = row[2];
        const photo_container = document.createElement("td");
        const photo = document.createElement("img");
        photo.src = photo_url;
        photo_container.appendChild(photo);
        tr.appendChild(photo_container);
        photo.classList.add('image');
        
        // GONE

        const gone_value = row[5];
        const gone = document.createElement("td");
        const gone_icon = document.createElement("div");
        if (gone_value)
            gone_icon.classList.add('icon-orange');
        else
            gone_icon.classList.add('icon-green');
        gone.appendChild(gone_icon);
        tr.appendChild(gone);

    

        rankingsBody.appendChild(tr);
       
    });
    const data2 = data;
}

document.addEventListener("DOMContentLoaded", () => { populateRankings(data); });
