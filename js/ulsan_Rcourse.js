const courseapi = '../js/Rcourse.json';
const getcourse = () => {
    fetch(courseapi).then((response) => response.json()).then((data) => {
        let infos = data.response.body.items.item;
        Array.from(infos).forEach((info) => {
            let imgurl = info.firstimage;
            let infotitle = info.title;
            let infodist = info.distance;
            let infoover = info.overview;
            let infotime = info.taketime;
            let cards = document.querySelector('.cards');
            let card = document.createElement('div');
            let imgbox = document.createElement('img');
            let textbox = document.createElement('div');
            let texttag = document.createElement('div');
            let divtitle = document.createElement('div');
            let divdist = document.createElement('div');
            let divtime = document.createElement('div');
            let divover = document.createElement('div');
            let spantitle = document.createTextNode(infotitle);
            let spandist = document.createTextNode(infodist);
            let spantime = document.createTextNode(infotime);
            let spanover = document.createTextNode(infoover);

            divtitle.appendChild(spantitle);
            divdist.appendChild(spandist);
            divtime.appendChild(spantime);
            divover.appendChild(spanover);
            texttag.appendChild(divdist);
            texttag.appendChild(divtime);
            textbox.appendChild(divtitle);
            textbox.appendChild(texttag);
            textbox.appendChild(divover);
            card.appendChild(imgbox);
            card.appendChild(textbox);
            cards.appendChild(card);

            card.setAttribute('class', "card");
            imgbox.setAttribute('src', imgurl);
            textbox.setAttribute('class', "note");
            texttag.setAttribute('class', "tag");
            divtitle.setAttribute('class', "title");
            divdist.setAttribute('class', "span");
            divtime.setAttribute('class', "span");
            divover.setAttribute('class', "over");
        });
    });
};
getcourse();