function initGiftList() {
    var items = [
        {
            sum: "Envoltura de Bebé (Gris)",
            desc: "para cargar al bebé",
            price: 210,
            where: [
                {name: "amazon", url: "https://www.amazon.com/Boba-BW1-005-Gray-Baby-Wrap-Grey/dp/B005SP2LWW"},
            ],
        },
        {
            sum: "Paquete de Baberos de algodón",
            desc: "varias edades de 6 meses á mas",
            price: 50,
            where: [
                {name: "amazon", url: "https://www.amazon.com/green-sprouts-Stay-dry-Infant-Count/dp/B000CP2X9O"},
            ],
        },
        {
            sum: "Cuna para Bebé",
            desc: "o Cuna portátil",
            price: 950,
            where: [
                {name: "falabella", url: "http://www.falabella.com.pe/falabella-pe/product/14661786/Mini-Cuna-para-Bebe-4040180"},
            ],
        },
        {
            sum: "Móvil de colores",
            desc: "y alegre para colgar encima de la cuna",
            price: 250,
        },
        {
            sum: "Ropita de bebé",
            desc: "calcetines, bodies de algodón, gorritos y/o conjuntitos de algodón",
            price: 40,
        },
        {
            sum: "Para la cuna",
            desc: "Mantitas de algodón o de pura lana virgen o de hilo; o almohada y cojines para recién nacido; o un juego de sábanas para la cuna; o un juego de protector y colcha para cuna",
            price: 80,
        },
        {
            sum: "Paquetes de pañales",
            desc: "y/o pañales de tela para 3kg-5kg",
            price: 50,
        },
        {
            sum: "Ropita para bebé",
            desc: "pijamas, zapatitos o patucos y guantes de algodón y/o lana, peleles, conjuntos para paseo",
            price: 80,
        },
        {
            sum: "Bolsa",
            desc: "para llevar cambios, pañales, etc...",
            price: 60,
        },
        {
            sum: "Intercomunicador de sonido",
            price: 80,
        },
        {
            sum: "Extractor de leche",
            price: 80,
        },
    ];

    var content = "<ul>";

    // sort based on desc. prices
    items.sort(function(a, b){return b.price - a.price});


    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        content += "<li class='gift'>";
        if(item.donator != null) {
            content += "<del>";
        }

        content += "<span class='gift-title'>" + item.sum + "</span>";
        if(item.donator != null) {
            content += "</del> (dado por " + item.donator + ")<del>";
        } else {
            content += " (&#177;&nbsp;s/.&nbsp;" + item.price + ")";

            if(item.desc != null) {
                content += "<br>" + item.desc;
            }

            if(item.where != null) {
                content += "<br><span class='gift-where'>> Se puede encontrar en: ";
                for(var u = 0; u < item.where.length; u++) {
                    var place = item.where[u];
                    if(place.url != null) {
                        content += "<a href='" + place.url + "'>" + place.name + "</a>";
                    } else {
                        content += place.name;
                    }
                    content += ", ";
                }
                content += "y otros lugares...</span>";
            }
        }

        if(item.donator != null) {
            content += "</del>";
        }
        content += "</li>";
    }

    var gifts = document.getElementById("giftlist");
    gifts.innerHTML = content;
}
