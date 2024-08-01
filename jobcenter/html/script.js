document.addEventListener('DOMContentLoaded', function() {

    const jobimg = document.getElementById('jobimg');
    const mainbox = document.getElementById('mainbox');
    const fbutton = document.getElementById('forwards');
    const bbutton = document.getElementById('backwards');
    const infoboks = document.getElementById('infoboks');
    const infoboks2 = document.getElementById('infoboks2');
    const jobboks = document.getElementById('jobbox');
    const jobtitle = document.getElementById('jobtitle');
    const jobinfotext = document.getElementById('jobinfotext');
    const jobinfotext2 = document.getElementById('jobinfotext2');
    const jobbutton = document.getElementById('selectjobbutton');
    const gpsbutton = document.getElementById('selectgpsbutton');
    const closebutton = document.getElementById('closebutton');
    
    window.addEventListener('message', function(event) {
        if (event.data.type === 'open') {
            mainbox.classList.add('show');
        }
    });

    const imageSources = [
        'https://cdn.discordapp.com/attachments/1151610324177399959/1262780647706067024/postman3_2.png?ex=6697d79f&is=6696861f&hm=820d81d10fc1868a7b04d6bec448e17de43c5649ef2dda7875dcddfb1b47011f&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1262779145579003904/maxresdefault_2.jpg?ex=6697d639&is=669684b9&hm=8849f7c4dc8d71547470c74f154e06e6f755ae1c418a3fa1e6066602ce589fc3&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1262779145285533756/maxresdefault_1_1.jpg?ex=6697d639&is=669684b9&hm=064bfece56fb4c314883e1a1afda8a94f178d8c576577dd2314188a636dab0a1&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1262779933739061319/screenshot10_1.webp?ex=6697d6f5&is=66968575&hm=6c8d8fe87ec52feb5131f67f03fc205dc3122947a9d8db3ef755b663520c3e85&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1262779933135212717/pizza_1.webp?ex=6697d6f5&is=66968575&hm=759542b7c0f7eeeb59660412c32f203f341b589a505aa35de79809fd793f1347&'
    ];

    const bgcolors = [
        'rgba(53, 90, 255, 0.4)',
        'rgba(41, 202, 70, 0.4)',
        'rgba(101, 67, 33, 0.4)',
        'rgba(255, 255, 53, 0.4)',
        'rgba(255, 53, 53, 0.4)'
    ];

    const jobtitles = [
        'Postmand',
        'Skraldemand',
        'Farmer',
        'Træhugger',
        'Pizzabud'
    ];

    const jobinfo = [
        'som postmand er dit job at levere post og pakker til byens borgere som postmand har du adgang til postmands menuen via /postmenu hvor at du kan hente din postbil og igang sætte opgaver for yderligere information besøg posthuset',
        'Som skraldemand er dit job at samle affald og genbrugsmaterialer fra byens borgere. Som skraldemand har du adgang til skraldemandens menu via /skraldmenu, hvor du kan hente din skraldebil og igangsætte opgaver. For yderligere information, besøg genbrugsstationen.',
        'Som farmer er dit job at dyrke og høste afgrøder samt passe på dine dyr på gården. Som farmer har du adgang til farmerens menu via /farmmenu, hvor du kan hente dine landbrugsmaskiner og igangsætte opgaver. For yderligere information, besøg landbrugskontoret.',
        'Som træhugger er dit job at fælde træer og forarbejde tømmer til videre brug. Som træhugger har du adgang til træhuggerens menu via /træmenu, hvor du kan hente din skovhuggerudstyr og igangsætte opgaver. For yderligere information, besøg skovhuggerstationen.',
        'Som pizzabud er dit job at levere frisklavede pizzaer til byens borgere. Som pizzabud har du adgang til pizzabuddets menu via /pizzamenu, hvor du kan hente din leveringsbil og igangsætte opgaver. For yderligere information, besøg pizzariaet.'
    ];

    const jobinfo2 = [
        'Din arbejdsplads er posthuset oppe ved Vinewood. Ved posthuset har du mulighed for at bruge personalerummet, hvor du blandt andet kan tage dit arbejdstøj på og gøre dig klar til din arbejdsdag. Du kan også tage noget frisk at drikke eller spise nede i den komplementære personale kiosk.',
        'Din arbejdsplads er affaldsstationen ved enden af Main Street. Her har du adgang til personalerummet, hvor du kan klæde om til arbejdet og forberede dig til dagens opgaver. Du har også mulighed for at tage et hvil og få noget at drikke eller spise i den lille personale kiosk, som tilbyder et udvalg af snacks og drikkevarer til dine pauser.',
        'Din arbejdsplads er gården ude ved landevejen. På gården har du adgang til et komfortabelt personalerum, hvor du kan skifte til dit arbejdstøj og forberede dig på dagens opgaver. Der er også en hyggelig personalekiosk, hvor du kan tage en pause, få lidt frisk frugt eller en kop kaffe, så du er klar til at tage fat på dagens arbejdsopgaver.',
        'Din arbejdsplads er skovområdet ved udkanten af byen. I skovrummet har du et lille, praktisk personalerum, hvor du kan ændre til arbejdstøj og forberede dig til dagens skovarbejde. Der er også en kiosk til personalet, hvor du kan finde lidt forfriskninger og snacks til at holde energien oppe i løbet af dagen, mens du nyder en velfortjent pause.',
        'Din arbejdsplads er pizzarestauranten i centrum af byen. Her har du adgang til et personalerum, hvor du kan skifte til dit uniform og klargøre dig til dagens leveringsopgaver. Personalekiosken tilbyder et udvalg af drikkevarer og snacks, så du kan få en lille pause og et hurtigt måltid, før du fortsætter med dagens leverancer.'
    ];

    let currentIndex = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;
    let currentIndex4 = 0;
    let currentIndex5 = 0;

    function updateContent() {
        jobimg.src = imageSources[currentIndex];
        jobboks.style.backgroundColor = bgcolors[currentIndex];
        jobboks.style.boxShadow = `0 0 20px 5px ${bgcolors[currentIndex]}`;
        jobtitle.textContent = jobtitles[currentIndex2];
        jobinfotext.textContent = jobinfo[currentIndex3];
        jobinfotext2.textContent = jobinfo2[currentIndex4];
    }
    
    fbutton.addEventListener('click', function() {
        jobboks.style.left = '51%';
        setTimeout(function() {
            currentIndex = (currentIndex + 1) % imageSources.length;
            currentIndex2 = (currentIndex2 + 1) % jobtitles.length;
            currentIndex3 = (currentIndex3 + 1) % jobinfo.length;
            currentIndex4 = (currentIndex4 + 1) % jobinfo2.length;
            jobboks.style.left = '50%';
            updateContent();
        }, 200);
    });
    

    bbutton.addEventListener('click', function() {
        jobboks.style.left = '49%';
        setTimeout(function() {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        currentIndex2 = (currentIndex2 - 1 + jobtitles.length) % jobtitles.length;
        currentIndex3 = (currentIndex3 - 1 + jobinfo.length) % jobinfo.length;
        currentIndex4 = (currentIndex4 - 1 + jobinfo2.length) % jobinfo2.length;
        jobboks.style.left = '50%';
        updateContent();
    }, 200);
    });

    jobbutton.addEventListener('click', function() {
        var playerjob = jobtitles[currentIndex2];
        jobbutton.style.backgroundColor = bgcolors[currentIndex];
        jobbutton.style.boxShadow = `0 0 20px 1px ${bgcolors[currentIndex]}`;
        setTimeout(function() {
            jobbutton.style.backgroundColor = 'rgba(131, 131, 131, 0.596)'
            jobbutton.style.boxShadow = null
            $.post(`https://${GetParentResourceName()}/givjob`, JSON.stringify({ job: playerjob }), function() {});
        updateContent();
    }, 200);
    });

    gpsbutton.addEventListener('click', function() {
        var playerjob = jobtitles[currentIndex2];
        gpsbutton.style.backgroundColor = bgcolors[currentIndex];
        gpsbutton.style.boxShadow = `0 0 20px 1px ${bgcolors[currentIndex]}`;
        setTimeout(function() {
            gpsbutton.style.backgroundColor = 'rgba(131, 131, 131, 0.596)'
            gpsbutton.style.boxShadow = null
            $.post(`https://${GetParentResourceName()}/setgps`, JSON.stringify({ job: playerjob }), function() {});
        updateContent();
    }, 200);
    });

    updateContent();

    closebutton.addEventListener('click', function() {
        closebutton.style.backgroundColor = bgcolors[currentIndex];
        closebutton.style.boxShadow = `0 0 20px 1px ${bgcolors[currentIndex]}`;
        setTimeout(function() {
            closebutton.style.backgroundColor = 'rgba(131, 131, 131, 0.596)'
            closebutton.style.boxShadow = null
            mainbox.classList.remove('show');
            $.post(`https://${GetParentResourceName()}/closejobcenter`, JSON.stringify({}), function() {});
        updateContent();
    }, 200);
    });

});
