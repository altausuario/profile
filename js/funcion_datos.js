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
    var datos = data.PROGRAMMING_LANGUAGES;
    const mitad = Math.ceil(datos.length / 2);
    var main_container_left = $('#main-container-left')
    var main_container_right = $('#main-container-right')
    var max_left = 2
    var max_right = 0

    var html_left = `<section class="container-tech-left">`
    var html_right = `<section class="container-tech-right">`
    $.each(datos, function (index, item) {
        if (index < mitad) {
            max_right = index + 3
            if (index < mitad) {
                html_left += `<div class="container__logo-title-tech">`
                if (item.CLASS == "") {
                    html_left += `<img src="${item.URL_IMAGE}" alt="${item.NAME}" class="style-logo-tech icon">`
                } else {
                    html_left += `<img src="${item.URL_IMAGE}" alt="${item.NAME}" class="style-logo-tech">`
                }
                html_left += `<h3 class="style-text__title-tech">${item.NAME}</h3>`
                html_left += `</div>`
            }
            if (index == max_left) {
                html_left += `</section>`
                main_container_left.append(html_left)
                html_left = `<section class="container-tech-left">`
                max_left += 3
            }

        } else {
            html_right += `<div class="container__logo-title-tech">`
            if (item.CLASS == "") {
                html_right += `<img src="${item.URL_IMAGE}" alt="${item.NAME}" class="style-logo-tech icon">`
            } else {
                html_right += `<img src="${item.URL_IMAGE}" alt="${item.NAME}" class="style-logo-tech">`
            }
            html_right += `<h3 class="style-text__title-tech">${item.NAME}</h3>`
            html_right += `</div>`

            if (index == max_right) {
                html_right += `</section>`
                main_container_right.append(html_right)
                html_right = `<section class="container-tech-right">`
                max_right += 3
            }
        }
    });

    $('#studies_description').text(data.STUDIES_DESCRIPTION)
}

function get_proyectos(data) {
    var datos = data.LIST_PROJECTS
    const content_project = $('#content-projects')
    var number = 1
    datos.forEach(d => {
        var html = `<article class="content-project">`
        // Carrucel
        html += `<span class="content-project-imgs">`
        html += `<div class="slime-imgs">`
        html += `<ul>`
        // SE HACE UN FORCHEA PARA EL CARRUCEL
        var cont = 1
        d.IMAGES.forEach(img => {
            if (cont <= 4) {
                html += `<li>`
                html += `<img loading="lazy" src="${img.URL}">`
                html += `</li>`
            }
            cont++
        })
        // FIN FOR CARRUCEL
        html += `</ul>`
        html += `</div>`
        html += `</span>`
        // fin carrucel
        // Datos
        html += `<div class="container-tech container__text-tech__project-1">`
        html += `<h1 class="number-project">0${number}.</h1>`
        html += `<h3 class="title-project">${d.NAME}</h3>`
        html += `<div class="container-description-project">`
        html += `<p class="text-description-project">${d.DESCRIPTON}</p>`
        html += `</div>`
        html += `<div class="container-icon-techs-project">`
        // SE HACER UN FOR PARA PONER LAS IMAGENES DE LOS LESNGUAJES DE PROGRAMACION UTILISADOS
        d.PROGRAMMING_LANGUAGES.forEach(icon => {
            if (icon.CLASS == "") {
                html += `<img src="${icon.URL}" class="icon">`
            } else {
                html += `<img src="${icon.URL}">`
            }
        })
        // FIN DEL FOR DE LAS IMAGENES DE LOS LESNGUAJES DE PROGRAMACION UTILISADOS
        html += `</div>`
        html += `<div class="container-project-see">`
        // link del demo
        if (d.URL_DEMO != "") {
            html += `<a href="${d.URL_DEMO}" class="project-style-a" target="_blank">Demo</a>`
        }
        // link repo
        if (d.URL_REPO != "") {
            html += `<a href="${d.URL_REPO}" target="_blank">Repo</a>`
        }
        html += `</div>`
        html += `</div>`
        html += `</article>`
        content_project.append(html)
        number++
    })
    $('#work_experience_description').text(data.WORK_EXPERIENCE_DESCRIPTION)
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
        get_proyectos(data.PROYECTOS)
        get_contato(data.CONTACTOS)
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error cargando el archivo JSON:', textStatus, error);
    });
});