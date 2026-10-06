const helyek = [
    {
        helyId: 1,
        helyNev: "Panoráma 1",
        helyTipus: "Sátorhely",
        maxSzemely: 4,
        arEjszakankent: 8500
    },
    {
        helyId: 2,
        helyNev: "Panoráma 2",
        helyTipus: "Sátorhely",
        maxSzemely: 4,
        arEjszakankent: 7500
    },
    {
        helyId: 3,
        helyNev: "Tópart 1",
        helyTipus: "Lakókocsihely",
        maxSzemely: 5,
        arEjszakankent: 12000
    },
    {
        helyId: 4,
        helyNev: "Tópart 2",
        helyTipus: "Lakókocsihely",
        maxSzemely: 5,
        arEjszakankent: 12500
    },
    {
        helyId: 5,
        helyNev: "Erdőszéli 1",
        helyTipus: "Sátorhely",
        maxSzemely: 3,
        arEjszakankent: 6000
    },
    {
        helyId: 6,
        helyNev: "Erdőszéli 2",
        helyTipus: "Sátorhely",
        maxSzemely: 3,
        arEjszakankent: 7000
    },
    {
        helyId: 7,
        helyNev: "Családi 1",
        helyTipus: "Mobilház",
        maxSzemely: 6,
        arEjszakankent: 22000
    },
    {
        helyId: 8,
        helyNev: "Családi 2",
        helyTipus: "Mobilház",
        maxSzemely: 6,
        arEjszakankent: 24000
    }
];

let foglalasok = [
    {
        foglalasId: 1, helyId: 1, vendegNev: "Nagy Péter",
        vendegEmail: "nagy.peter@email.hu",
        erkezes: "2026-06-15", tavozas: "2026-06-18",
        vendegekSzama: 3
    },
    {
        foglalasId: 2, helyId: 2, vendegNev: "Kovács Anna",
        vendegEmail: "kovacs.anna@email.hu",
        erkezes: "2026-06-20", tavozas: "2026-06-23",
        vendegekSzama: 2
    },
    {
        foglalasId: 3, helyId: 3, vendegNev: "Szabó Gábor",
        vendegEmail: "szabo.gabor@email.hu",
        erkezes: "2026-07-01", tavozas: "2026-07-07",
        vendegekSzama: 4
    },
    {
        foglalasId: 4, helyId: 4, vendegNev: "Tóth Eszter",
        vendegEmail: "toth.eszter@email.hu",
        erkezes: "2026-07-05", tavozas: "2026-07-10",
        vendegekSzama: 5
    },
    {
        foglalasId: 5, helyId: 5, vendegNev: "Horváth Dávid",
        vendegEmail: "horvath.david@email.hu",
        erkezes: "2026-07-12", tavozas: "2026-07-15",
        vendegekSzama: 2
    },
    {
        foglalasId: 6, helyId: 6, vendegNev: "Varga Zoltán",
        vendegEmail: "varga.zoltan@email.hu",
        erkezes: "2026-07-18", tavozas: "2026-07-22",
        vendegekSzama: 3
    },
    {
        foglalasId: 7, helyId: 7, vendegNev: "Kiss Réka",
        vendegEmail: "kiss.reka@email.hu",
        erkezes: "2026-07-25", tavozas: "2026-07-30",
        vendegekSzama: 5
    },
    {
        foglalasId: 8, helyId: 8, vendegNev: "Molnár Bence",
        vendegEmail: "molnar.bence@email.hu",
        erkezes: "2026-08-01", tavozas: "2026-08-08",
        vendegekSzama: 6
    }
];

const helySelect = document.getElementById("hely");

helyek.forEach(hely => {
    let option = document.createElement("option");

    option.value = hely.helyId;
    option.textContent =
        hely.helyNev + " - " + hely.arEjszakankent + " Ft/éj";

    helySelect.appendChild(option);
});

function tablaNezet() {
    let lista = szurtFoglalasok();

    let html = `
        <table class="table table-striped table-bordered">
            <thead class="table-success">
                <tr>
                    <th onclick="rendezNev()">Név ↕</th>
                    <th>Hely</th>
                    <th>Érkezés</th>
                    <th>Távozás</th>
                    <th>Vendégek</th>
                    <th>Művelet</th>
                </tr>
            </thead>
            <tbody>
    `;

    lista.forEach(f => {
        let hely = helyek.find(h => h.helyId == f.helyId);

        html += `
            <tr>
                <td>${f.vendegNev}</td>
                <td>${hely.helyNev}</td>
                <td>${f.erkezes}</td>
                <td>${f.tavozas}</td>
                <td>${f.vendegekSzama}</td>
                <td>
                    <button class="btn btn-danger btn-sm"
                            onclick="torles(${f.foglalasId})">
                        Törlés
                    </button>
                </td>
            </tr>
        `;
    });

    html += "</tbody></table>";

    document.getElementById("foglalasLista").innerHTML = html;
}

function kartyaNezet() {
    let lista = szurtFoglalasok();

    let html = '<div class="row">';

    lista.forEach(f => {
        let hely = helyek.find(h => h.helyId == f.helyId);

        html += `
            <div class="col-md-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${f.vendegNev}</h5>
                        <p>
                            <strong>Hely:</strong> ${hely.helyNev}<br>
                            <strong>Típus:</strong> ${hely.helyTipus}<br>
                            <strong>Érkezés:</strong> ${f.erkezes}<br>
                            <strong>Távozás:</strong> ${f.tavozas}<br>
                            <strong>Vendégek:</strong> ${f.vendegekSzama}
                        </p>

                        <button class="btn btn-danger"
                                onclick="torles(${f.foglalasId})">
                            Törlés
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    html += "</div>";

    document.getElementById("foglalasLista").innerHTML = html;
}

function szurtFoglalasok() {
    let nev = document.getElementById("kereses").value.toLowerCase();
    let tipus = document.getElementById("tipusSzures").value;

    return foglalasok.filter(f => {
        let hely = helyek.find(h => h.helyId == f.helyId);

        return f.vendegNev.toLowerCase().includes(nev)
            && (tipus == "" || hely.helyTipus == tipus);
    });
}

function torles(id) {
    foglalasok = foglalasok.filter(f => f.foglalasId != id);

    tablaNezet();
}

function rendezNev() {
    foglalasok.sort((a, b) =>
        a.vendegNev.localeCompare(b.vendegNev)
    );

    tablaNezet();
}

document.getElementById("kereses").addEventListener("input", tablaNezet);
document.getElementById("tipusSzures").addEventListener("change", tablaNezet);

let ma = new Date().toISOString().split("T")[0];

document.getElementById("erkezes").min = ma;
document.getElementById("tavozas").min = ma;

document.getElementById("erkezes").addEventListener("change", function () {
    document.getElementById("tavozas").min = this.value;
    foglalasiAr();
});

document.getElementById("tavozas").addEventListener("change", foglalasiAr);
document.getElementById("hely").addEventListener("change", foglalasiAr);
document.getElementById("vendegek").addEventListener("input", foglalasiAr);

function foglalasiAr() {
    let hely = helyek.find(h =>
        h.helyId == document.getElementById("hely").value
    );

    let erkezes = new Date(document.getElementById("erkezes").value);
    let tavozas = new Date(document.getElementById("tavozas").value);
    let vendegek = Number(document.getElementById("vendegek").value);

    if (!hely || isNaN(erkezes) || isNaN(tavozas)) {
        document.getElementById("osszeg").textContent = "0 Ft";
        return;
    }

    let napok = (tavozas - erkezes) / (1000 * 60 * 60 * 24);

    if (napok > 0) {
        let osszeg = napok * hely.arEjszakankent * vendegek;
        document.getElementById("osszeg").textContent =
            osszeg.toLocaleString() + " Ft";
    }
}
document.getElementById("foglalasForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nev = document.getElementById("nev").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let helyId = Number(document.getElementById("hely").value);
    let erkezes = document.getElementById("erkezes").value;
    let tavozas = document.getElementById("tavozas").value;
    let vendegek = Number(document.getElementById("vendegek").value);

    let hely = helyek.find(h => h.helyId == helyId);

    if (vendegek > hely.maxSzemely) {
        hiba("Ezen a helyen maximum " + hely.maxSzemely + " fő tartózkodhat!");
        return;
    }

    if (new Date(tavozas) <= new Date(erkezes)) {
        hiba("A távozás dátumának későbbinek kell lennie az érkezésnél!");
        return;
    }

    let foglalt = foglalasok.some(f =>
        f.helyId == helyId &&
        erkezes < f.tavozas &&
        tavozas > f.erkezes
    );

    if (foglalt) {
        hiba("Ez a hely ebben az időszakban már foglalt!");
        return;
    }

    let ujFoglalas = {
        foglalasId: Date.now(),
        helyId: helyId,
        vendegNev: nev,
        vendegEmail: email,
        telefon: telefon,
        erkezes: erkezes,
        tavozas: tavozas,
        vendegekSzama: vendegek
    };

    foglalasok.push(ujFoglalas);

    document.getElementById("uzenet").innerHTML = `
        <div class="alert alert-success">
            <h5>Sikeres foglalás!</h5>
            <p>
                <strong>Név:</strong> ${nev}<br>
                <strong>Hely:</strong> ${hely.helyNev}<br>
                <strong>Érkezés:</strong> ${erkezes}<br>
                <strong>Távozás:</strong> ${tavozas}<br>
                <strong>Vendégek:</strong> ${vendegek}
            </p>
        </div>
    `;

    this.reset();

    document.getElementById("osszeg").textContent = "0 Ft";

    tablaNezet();
});

function hiba(szoveg) {
    document.getElementById("uzenet").innerHTML = `
        <div class="alert alert-danger">
            ${szoveg}
        </div>
    `;
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
});

function oldalTeteje() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
tablaNezet();