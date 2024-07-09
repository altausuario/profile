function get_inicio(data) {
    $('#nombre').text(data.FULL_ANME);
    $('#profile_photo').attr('src', data.IMAGE);
}

function get_sobre_mi(data) {
    $('#profile_picture_about_me').attr('src', data.IMAGE)
    $('#description_about_me').text(data.DESCRIPTION)
    $('#download_cv').attr('href', data.DONWLOAD_CV)
    $('#download_cv').attr('download', data.DONWLOAD_CV_NAME)
}

function get_conocimiento(data) {
    var datos = data.PROGRAMMING_LANGUAGES
    const content_conocimientos = $('#content_conocimientos')
    datos.forEach((d, index) => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        var html = `<article class="cart__conocimientos" data-index="${index}">`;
        html += `<div class="cart__conocomientos__container">`;
        html += `<img src="${d.URL_IMAGE}">`;
        html += `<h3>${d.NAME}</h3>`;
        html += `<div class="rating" data-rating="${d.PUNTAJE}"></div>`;
        html += `</div>`;
        html += `</article>`;
        content_conocimientos.append(html);

        addDynamicStyle(index, color1, color2);
    });
    
    $('.rating').each(function () {
        const ratingValue = parseInt($(this).data('rating'));
        const starsTotal = 5;
        for (let i = 1; i <= starsTotal; i++) {
            const star = $('<i>').addClass('fas fa-star');
            if (i <= ratingValue) {
                star.addClass('fa');
            } else {
                star.addClass('fa-star-o');
            }
            $(this).append(star);
        }
    });
}

function get_estudios(data) {
    var datos = data.LIST_STUDIES
    const content_studies = $('#content__studies')

    datos.forEach(d => {
        var html = `<article>`;
        html += `<div class="cont__title">`
        if (d.DATE_END != "") {
            html += `<h4 class="date__study">${d.DATE_START} - ${d.DATE_END}</h4>`
        } else {
            html += `<h4 class="date__study">${d.DATE_START} - Finalizado</h4>`
        }

        html += `<h3 class="title__study">${d.NAME}</h3>`
        html += `</div>`
        html += `<div class="cont__instituto__type">`
        html += `<h4 class="type__study">${d.TYPE}</h4>`
        html += `<h4 class="instituto__study">${d.FACILITY}</h4>`
        html += `</div>`
        html += `<div class="cont__description">`
        html += `<p class="description__study">${d.DESCRIPTION}</p>`
        html += `</div>`
        html += `</article>`
        content_studies.append(html)
    })
}

function get_proyectos(data) {
    var datos = data.LIST_PROJECTS
    const content_project = $('#content-projects')
    var number = 1
    datos.forEach(d => {
        var html = `<article class="content-project">`
        html += `<article class="card__slime">`
        html += `<div class="card__slime__content">`
        html += `<div class="slime__content">`
        // Comienso slime
        html += `<div class="carousel">`
        d.IMAGES.forEach(img => {
            html += `<img src="${img.URL}">`
        })
        //Fin slime
        html += `</div>`
        html += `</div>`
        html += `</div>`
        html += `</article>`
        html += `<div class="container-tech container__text-tech__project-1">`
        html += `<h1 class="number-project">${number}</h1>`
        html += `<h3 class="title-project">${d.NAME}</h3>`
        html += `<div class="container-description-project">`
        html += `<p class="text-description-project">${d.DESCRIPTON}</p>`
        html += `</div>`
        html += `<div class="container-icon-techs-project">`
        d.PROGRAMMING_LANGUAGES.forEach(i => {
            html += `<img src="${i.URL}" class="icon">`
        })
        html += ` </div>`
        html += `<div class="container-project-see">`
        if (d.URL_DEMO != "") {
            html += `<a href="${d.URL_DEMO}" class="project-style-a" target="_blank">Demo</a>`
        }
        if (d.URL_REPO != "") {
            html += ` <a href="${d.URL_REPO}" target="_blank">Repo</a>`
        }
        html += `</div>`
        html += `</div>`
        html += `</article>`

        content_project.append(html)
        number++
    })
    initializeCarousel()
}

function get_contato(data) {
    $('#url_linkedin').attr('href', data.LINKEDIN)
    $('#url_github').attr('href', data.GITHUB)
    $('#url_email').attr('href', `mailto: ${data.EMAIL}`)
    $('#url_whatsapp').attr('href', `https://wa.me/${data.WHATSAPP}`)
    $('#text_developer').text(data.TEXT_DEVELOPER)
}

$(document).ready(function () {
    $.getJSON('json/datos.json', function (data) {
        // LLAMAMOS LAS FUCIONES Y LE PASAMOS EL PARAMETRO CORRESPONDIENTE
        get_inicio(data.INICIO)
        get_sobre_mi(data.SOBRE_MI)
        get_conocimiento(data.CONOCIMIENTOS)
        get_estudios(data.ESTUDIOS)
        get_proyectos(data.PROYECTOS)
        get_contato(data.CONTACTOS)
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error cargando el archivo JSON:', textStatus, error);
    });
});