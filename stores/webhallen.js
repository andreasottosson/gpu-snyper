const webhallen = {
    name: "WEBHALLEN",
    selectors: {
        title: ".product-top h1",
        price: ".price-value",
        stock: ".web-stock .stock-text"
    },
    cards: [
        "https://www.webhallen.com/se/product/328700-Zotac-GeForce-RTX-3060Ti-Twin-Edge-OC-8GB",
        "https://www.webhallen.com/se/product/328141-ASUS-GeForce-RTX-3060Ti-Dual-OC-8GB",
        "https://www.webhallen.com/se/product/329788-Palit-GeForce-RTX-3060Ti-Dual-8GB",
        "https://www.webhallen.com/se/product/329927-ASUS-GeForce-RTX-3060Ti-Dual-MINI-OC-8GB",
        "https://www.webhallen.com/se/product/328147-Gainward-GeForce-RTX-3060Ti-Ghost-8GB",
        "https://www.webhallen.com/se/product/328145-ASUS-ROG-STRIX-GeForce-RTX-3060Ti-OC-8GB",
        "https://www.webhallen.com/se/product/328143-ASUS-TUF-GeForce-RTX-3060Ti-OC-8GB",
        "https://www.webhallen.com/se/product/329771-Gigabyte-GeForce-RTX-3060Ti-Gaming-OC-PRO-8GB",
        "https://www.webhallen.com/se/product/328765-MSI-GeForce-RTX-3060-Ti-GAMING-X-TRIO",
        "https://www.webhallen.com/se/product/328699-Zotac-GeForce-RTX-3060Ti-Twin-Edge-8GB",
        "https://www.webhallen.com/se/product/328148-Gainward-GeForce-RTX-3060Ti-Ghost-OC-8GB",
        "https://www.webhallen.com/se/product/328146-Palit-GeForce-RTX-3060Ti-Dual-OC-8GB",
        "https://www.webhallen.com/se/product/331557-MSI-GeForce-RTX-3060-Ti-GAMING-X",
        "https://www.webhallen.com/se/product/331125-Zotac-GeForce-RTX-3060-AMP-White-Edition-12GB",
        "https://www.webhallen.com/se/product/329791-Palit-GeForce-RTX-3060Ti-Gaming-Pro-OC-8GB",
        "https://www.webhallen.com/se/product/329790-Palit-GeForce-RTX-3060Ti-Gaming-Pro-8GB",
        "https://www.webhallen.com/se/product/329530-MSI-GeForce-RTX-3060-Ti-VENTUS-2X-OC-v1",
        "https://www.webhallen.com/se/product/328904-Gigabyte-GeForce-RTX-3060Ti-Gaming-OC-8GB",
        "https://www.webhallen.com/se/product/328903-Gigabyte-GeForce-RTX-3060Ti-Eagle-OC-8GB",
        "https://www.webhallen.com/se/product/328766-MSI-GeForce-RTX-3060-Ti-VENTUS-3X-OC",
        "https://www.webhallen.com/se/product/328144-ASUS-ROG-STRIX-GeForce-RTX-3060Ti-8GB",
        "https://www.webhallen.com/se/product/328142-ASUS-TUF-GeForce-RTX-3060Ti-8GB",
        "https://www.webhallen.com/se/product/328140-ASUS-GeForce-RTX-3060Ti-Dual-8GB",
        "https://www.webhallen.com/se/product/324066-MSI-GeForce-RTX-3070-GAMING-X-TRIO-8GB",
        "https://www.webhallen.com/se/product/328851-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB-OC-White-Edition",
        "https://www.webhallen.com/se/product/324223-ASUS-GeForce-RTX-3070-Dual-OC-8GB",
        "https://www.webhallen.com/se/product/324064-MSI-GeForce-RTX-3070-VENTUS-2X-OC-8GB",
        "https://www.webhallen.com/se/product/324065-MSI-GeForce-RTX-3070-VENTUS-3X-OC-8GB",
        "https://www.webhallen.com/se/product/325817-ASUS-TUF-GeForce-RTX-3070-8GB-Gaming-OC",
        "https://www.webhallen.com/se/product/324215-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-OC-8GB",
        "https://www.webhallen.com/se/product/324222-ASUS-GeForce-RTX-3070-Dual-8GB",
        "https://www.webhallen.com/se/product/327260-Gainward-GeForce-RTX-3070-Phoenix-GS-8GB",
        "https://www.webhallen.com/se/product/325816-ASUS-TUF-GeForce-RTX-3070-8GB-Gaming",
        "https://www.webhallen.com/se/product/327738-Gigabyte-GeForce-RTX-3070-AORUS-MASTER-8GB",
        "https://www.webhallen.com/se/product/327462-Gigabyte-GeForce-RTX-3070-Eagle-8GB",
        "https://www.webhallen.com/se/product/327278-Palit-GeForce-RTX-3070-GamingPro-OC-8GB",
        "https://www.webhallen.com/se/product/329037-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-OC-8GB-Vit",
        "https://www.webhallen.com/se/product/329427-Palit-GeForce-RTX-3070-GameRock-8G",
        "https://www.webhallen.com/se/product/324214-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-8GB",
        "https://www.webhallen.com/se/product/327463-Gigabyte-GeForce-RTX-3070-Eagle-OC-8GB",
        "https://www.webhallen.com/se/product/325474-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB",
        "https://www.webhallen.com/se/product/329426-Palit-GeForce-RTX-3070-Jetstream-OC-8GB",
        "https://www.webhallen.com/se/product/328886-Gainward-GeForce-RTX-3070-Phantom-8GB",
        "https://www.webhallen.com/se/product/328885-Gainward-GeForce-RTX-3070-Phoenix-8GB",
        "https://www.webhallen.com/se/product/329792-Palit-GeForce-RTX-3070-GameRock-OC-8G",
        "https://www.webhallen.com/se/product/329038-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-8GB-Vit",
        "https://www.webhallen.com/se/product/328561-Palit-GeForce-RTX-3070-Jetstream-8GB",
        "https://www.webhallen.com/se/product/325475-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB-OC",
        "https://www.webhallen.com/se/product/328887-Gainward-GeForce-RTX-3070-Phantom-GS-8GB",
        "https://www.webhallen.com/se/product/327836-MSI-GeForce-RTX-3070-SUPRIM-X-8GB",
        "https://www.webhallen.com/se/product/327736-Gigabyte-GeForce-RTX-3070-Vision-OC-8GB",
        "https://www.webhallen.com/se/product/327258-Palit-GeForce-RTX-3070-GamingPro-8GB",
        "https://www.webhallen.com/se/product/326419-Gigabyte-GeForce-RTX-3070-GAMING-OC-8GB",
        "https://www.webhallen.com/se/product/324099-ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-Gaming-OC",
        "https://www.webhallen.com/se/product/323980-ASUS-TUF-GeForce-RTX-3080-10GB-Gaming",
        "https://www.webhallen.com/se/product/324062-ASUS-TUF-GeForce-RTX-3080-10GB-Gaming-OC",
        "https://www.webhallen.com/se/product/327539-MSI-GeForce-RTX-3080-SUPRIM-X-10GB",
        "https://www.webhallen.com/se/product/324068-MSI-GeForce-RTX-3080-GAMING-X-TRIO-10GB",
        "https://www.webhallen.com/se/product/324098-ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-Gaming",
        "https://www.webhallen.com/se/product/324067-MSI-GeForce-RTX-3080-VENTUS-3X-OC-10GB",
        "https://www.webhallen.com/se/product/325477-Zotac-Gaming-GeForce-RTX-3080-AMP-HOLO",
        "https://www.webhallen.com/se/product/325941-Gigabyte-GeForce-RTX-3080-Vision-OC-10GB",
        "https://www.webhallen.com/se/product/325476-Zotac-Gaming-GeForce-RTX-3080-Trinity-10GB-OC",
        "https://www.webhallen.com/se/product/324207-Palit-GeForce-RTX-3080-Gaming-Pro-OC-10GB",
        "https://www.webhallen.com/se/product/329961-Gigabyte-GeForce-RTX-3080-AORUS-XTREME-10GB",
        "https://www.webhallen.com/se/product/329034-ASUS-ROG-STRIX-GeForce-RTX-3080-Gaming-OC-10GB-Vit",
        "https://www.webhallen.com/se/product/328157-ASUS-EKWB-GeForce-RTX-3080-10GB",
        "https://www.webhallen.com/se/product/327742-Gigabyte-GeForce-RTX-3080-AORUS-MASTER-10GB",
        "https://www.webhallen.com/se/product/327542-Gainward-GeForce-RTX-3080-Phantom-10G",
        "https://www.webhallen.com/se/product/327275-Palit-GeForce-RTX-3080-GameRock-10G-OC",
        "https://www.webhallen.com/se/product/327274-Palit-GeForce-RTX-3080-GameRock-10G",
        "https://www.webhallen.com/se/product/327271-Gainward-GeForce-RTX-3080-Phantom-GS-10G",
        "https://www.webhallen.com/se/product/324456-Zotac-Gaming-GeForce-RTX-3080-Trinity-10GB",
        "https://www.webhallen.com/se/product/324211-Gainward-GeForce-RTX-3080-Phoenix-GS-10GB",
        "https://www.webhallen.com/se/product/324210-Gainward-GeForce-RTX-3080-Phoenix-10GB",
        "https://www.webhallen.com/se/product/324204-Palit-GeForce-RTX-3080-Gaming-Pro-10GB",
        "https://www.webhallen.com/se/product/324086-Gigabyte-GeForce-RTX-3080-GAMING-OC-10GB",
    ]
};

export default webhallen;