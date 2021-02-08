const inet = {
    name: "INET",
    selectors: {
        title: ".product-description h1",
        price: ".box-body > .price",
        stock: ".stock > .qty-string"
    },
    cards: [
        "https://www.inet.se/produkt/5411881/asus-geforce-rtx-3060-ti-8gb-dual-oc",
        "https://www.inet.se/produkt/5412030/asus-geforce-rtx-3060-ti-8gb-mini-dual-oc",
        "https://www.inet.se/produkt/5411885/asus-geforce-rtx-3060-ti-8gb-rog-strix-gaming-oc",
        "https://www.inet.se/produkt/5411883/asus-geforce-rtx-3060-ti-8gb-tuf-gaming-oc",
        "https://www.inet.se/produkt/5411924/evga-geforce-rtx-3060-ti-8gb-ftw3-ultra",
        "https://www.inet.se/produkt/5411927/evga-geforce-rtx-3060-ti-8gb-xc-gaming",
        "https://www.inet.se/produkt/5411799/gigabyte-geforce-rtx-3060-ti-8gb-aorus-master",
        "https://www.inet.se/produkt/5411802/gigabyte-geforce-rtx-3060-ti-8gb-eagle",
        "https://www.inet.se/produkt/5411801/gigabyte-geforce-rtx-3060-ti-8gb-eagle-oc",
        "https://www.inet.se/produkt/5411917/gigabyte-geforce-rtx-3060-ti-8gb-gaming-oc",
        "https://www.inet.se/produkt/5411888/gigabyte-geforce-rtx-3060-ti-8gb-gaming-oc-pro",
        "https://www.inet.se/produkt/5412110/gigabyte-geforce-rtx-3060-ti-8gb-vision-oc",
        "https://www.inet.se/produkt/5411918/msi-geforce-rtx-3060-ti-8gb-gaming-x-trio",
        "https://www.inet.se/produkt/5411922/msi-geforce-rtx-3060-ti-8gb-ventus-3x-oc",
        "https://www.inet.se/produkt/5411878/pny-geforce-rtx-3060-ti-8gb-revel-epic-x",
        "https://www.inet.se/produkt/5411715/asus-geforce-rtx-3070-8gb-dual",
        "https://www.inet.se/produkt/5411684/asus-geforce-rtx-3070-8gb-dual-oc",
        "https://www.inet.se/produkt/5411714/asus-geforce-rtx-3070-8gb-rog-strix-gaming",
        "https://www.inet.se/produkt/5411681/asus-geforce-rtx-3070-8gb-rog-strix-gaming-oc",
        "https://www.inet.se/produkt/5411809/asus-geforce-rtx-3070-8gb-tuf-gaming",
        "https://www.inet.se/produkt/5411682/asus-geforce-rtx-3070-8gb-tuf-gaming-oc",
        "https://www.inet.se/produkt/5411835/evga-geforce-rtx-3070-8gb-ftw3",
        "https://www.inet.se/produkt/5411836/evga-geforce-rtx-3070-8gb-ftw3-ultra",
        "https://www.inet.se/produkt/5411833/evga-geforce-rtx-3070-8gb-xc3",
        "https://www.inet.se/produkt/5411832/evga-geforce-rtx-3070-8gb-xc3-black",
        "https://www.inet.se/produkt/5411834/evga-geforce-rtx-3070-8gb-xc3-ultra",
        "https://www.inet.se/produkt/5411837/gigabyte-geforce-rtx-3070-8gb-aorus-master",
        "https://www.inet.se/produkt/5411777/gigabyte-geforce-rtx-3070-8gb-eagle",
        "https://www.inet.se/produkt/5411776/gigabyte-geforce-rtx-3070-8gb-eagle-oc",
        "https://www.inet.se/produkt/5411775/gigabyte-geforce-rtx-3070-8gb-gaming-oc",
        "https://www.inet.se/produkt/5411838/gigabyte-geforce-rtx-3070-8gb-vision-oc",
        "https://www.inet.se/produkt/5411687/msi-geforce-rtx-3070-8gb-gaming-x-trio",
        "https://www.inet.se/produkt/5411862/msi-geforce-rtx-3070-8gb-suprim-x",
        "https://www.inet.se/produkt/5411685/msi-geforce-rtx-3070-8gb-ventus-2x-oc",
        "https://www.inet.se/produkt/5411686/msi-geforce-rtx-3070-8gb-ventus-3x-oc",
        "https://www.inet.se/produkt/5411707/pny-geforce-rtx-3070-8gb-uprising-dual-fan-edition",
        "https://www.inet.se/produkt/5411708/pny-geforce-rtx-3070-8gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition",
        "https://www.inet.se/produkt/5411727/evga-geforce-rtx-3080-10gb-ftw3",
        "https://www.inet.se/produkt/5411728/evga-geforce-rtx-3080-10gb-ftw3-ultra",
        "https://www.inet.se/produkt/5411992/evga-geforce-rtx-3080-10gb-ftw3-ultra-hybrid-gaming",
        "https://www.inet.se/produkt/5411725/evga-geforce-rtx-3080-10gb-xc3",
        "https://www.inet.se/produkt/5411724/evga-geforce-rtx-3080-10gb-xc3-black",
        "https://www.inet.se/produkt/5411726/evga-geforce-rtx-3080-10gb-xc3-ultra",
        "https://www.inet.se/produkt/5411677/asus-geforce-rtx-3080-10gb-rog-strix-gaming-oc",
        "https://www.inet.se/produkt/5411673/asus-geforce-rtx-3080-10gb-tuf-gaming",
        "https://www.inet.se/produkt/5411697/asus-geforce-rtx-3080-10gb-tuf-gaming-oc",
        "https://www.inet.se/produkt/5412023/gigabyte-geforce-rtx-3080-10gb-aorus-gaming-box",
        "https://www.inet.se/produkt/5411768/gigabyte-geforce-rtx-3080-10gb-aorus-master",
        "https://www.inet.se/produkt/5411781/gigabyte-geforce-rtx-3080-10gb-aorus-xtreme",
        "https://www.inet.se/produkt/5411866/gigabyte-geforce-rtx-3080-10gb-aorus-xtreme-waterforce",
        "https://www.inet.se/produkt/5412024/gigabyte-geforce-rtx-3080-10gb-aorus-xtreme-wb",
        "https://www.inet.se/produkt/5411691/gigabyte-geforce-rtx-3080-10gb-eagle-oc",
        "https://www.inet.se/produkt/5411692/gigabyte-geforce-rtx-3080-10gb-gaming-oc",
        "https://www.inet.se/produkt/5411782/gigabyte-geforce-rtx-3080-10gb-vision-oc",
        "https://www.inet.se/produkt/5411689/msi-geforce-rtx-3080-10gb-gaming-x-trio",
        "https://www.inet.se/produkt/5411910/msi-geforce-rtx-3080-10gb-suprim-x",
        "https://www.inet.se/produkt/5411688/msi-geforce-rtx-3080-10gb-ventus-3x-oc",
    ]
};

export default inet;