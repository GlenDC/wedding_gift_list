function initGiftList() {
    var items = [
        {
            sum: "Envoltura de Bebé (Gris)",
            price: 210,
            where: [
                {name: "amazon", url: "https://www.amazon.com/Boba-BW1-005-Gray-Baby-Wrap-Grey/dp/B005SP2LWW"},
            ],
        },
        {
            sum: "Paquete de Baberos",
            desc: "varias edades de 6 meses á mas",
            price: 50,
            where: [
                {name: "amazon", url: "https://www.amazon.com/green-sprouts-Stay-dry-Infant-Count/dp/B000CP2X9O"},
            ],
        },
        {
            sum: "Cuna para Bebé",
            price: 950,
            where: [
                {name: "falabella", url: "http://www.falabella.com.pe/falabella-pe/product/14661786/Mini-Cuna-para-Bebe-4040180"},
            ],
        },
    ];

    var content = "<ul>";

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
            content += " (&#177; s/. " + item.price + ")";

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
                content += "y otras lugares...</span>";
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
