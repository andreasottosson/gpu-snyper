const netonnet = {
    name: "NETONNET",
    selectors: {
        title: ".product-leftInfo h2",
        price: ".price-big",
        stock: "#onlineStockstatus .deliveryInfoText"
    },
    cards: [
        //  3060
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060-rog-strix-gaming-oc-12gb/1016755.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060-rog-strix-gaming-12gb/1016756.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060-tuf-gaming-oc-12gb/1016757.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060-tuf-gaming-12gb/1016758.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-gaming-x-trio-12g/1016938.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-gaming-x-12g/1016939.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-ventus-3x-12g-oc/1016940.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-ventus-2x-12g-oc/1016941.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-ventus-2x-12g/1016942.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/kfa2-geforce-rtx-3060-1-click-oc-12gb/1017015.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060-eagle-oc-12gb/1017084.8989/",
        //  3060 ti
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060-ti-rog-strix-gaming-oc-8gb/1016449.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060ti-gaming-x/1017017.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060ti-tuf-gaming-oc-8gb/1015565.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060ti-dual-8gb/1015569.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060ti-tuf-gaming-8gb/1015570.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060ti-rog-strix-gaming-8gb/1015572.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060-ti-eagle-8g/1015575.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g/1015576.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060-ti-gaming-oc-8gb/1015578.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060-ti-aorus-master/1015582.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3060ti-dual-oc-8gb/1015673.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-ti-gaming-x-trio/1015906.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3060-ti-ventus-3x-oc/1015909.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/kfa2-geforce-rtx-3060-ti-ex-8gb/1015617.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3060ti-gaming-pro-oc/1016888.8989/",
        //  3070
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-dual-8g/1014450.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3070-gaming-oc-8g/1014992.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3070-eagle-oc-8g/1014993.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3070-ventus-3x-oc/1014371.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3070-ventus-2x-oc/1014370.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3070-gaming-x-trio/1014369.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3070-vision-oc-8gb/1015511.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-tuf-gaming/1014925.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-rog-strix-gaming-8g/1014451.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-tuf-gaming-oc-8gb/1015672.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3070-suprim-8g/1016112.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3070-master-8gb/1016319.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-rog-strix-gaming-oc-8gb/1016448.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-dual-oc-8gb/1015671.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3070-ekwb-8gb/1015994.8989/",
        //  3080
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3080-ventus-3x-10g-oc/1014374.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3080-gaming-x-trio-10g/1014373.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-10g/1014394.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g/1014380.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-eagle-oc-10g/1014382.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-aorus-xtream-10gb/1015517.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3080-tuf-gaming-10g/1014354.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3080-tuf-gaming-oc-10gb/1015670.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-oc-white-10gb/1015992.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-oc-10gb/1016281.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/gigabyte-geforce-rtx-3080-vision-oc-10gb/1016320.8960/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-eagle-10gb/1017100.8989/",
        "https://www.netonnet.se/art/datorkomponenter/grafikkort/nvidia/msi-geforce-rtx-3080-suprim-x-10g/1015474.8989/",
      ]
};

export default netonnet;