let gadgets = [
    {
        image : "hp-laptop",
        item : "Laptop",
        price : "$256 - $350"
    },
    {
        image : "drone",
        item : "Drone",
        price : "$516 - $680"
    },
    {
        image : "flatscreen computer",
        item : "HD Computer",
        price : "$1215 - $2650"
    },
    {
        image : "DLSR computer",
        item : "DLSR Camera",
        price : "$180 - $302"
    },
    {
        image : "Iphone",
        item : "iphone",
        price : "$457 - $680"
    },
    {
        image : "laptop",
        item : "Laptop",
        price : "$325 - $450"
    },
    {
        image : "satelite-didh",
        item : "Satelite drone",
        price : "$487 - $692"
    },
    {
        image : "smart-watch",
        item : "Smart watch",
        price : "$170 - $299"
    },
    {
        image : "smart-watch1",
        item : "Smart watch",
        price : "$120 - $199"
    },
    {
        image : "smartphone-speakers",
        item : "Smart speakers",
        price : "$186 - $266"
    },
    {
        image : "sony-camera",
        item : "Sony camera",
        price : "$220 - 361"
    },
    {
        image : "wb-drone",
        item : "WB Drone",
        price : "$361 - $508"
    },
]

let techGallery = document.getElementById('tech-image');
let html = "";
gadgets.forEach(e=> {
    html += `
    
    
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card m-3">
                <image src="images/${e.image}.jpg" class="card-image-top gallery-item image-fluid" alt="...">
                <div class="card-body">
                    <h4>${e.item}</h4>
                    <h3>${e.price}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Purcharse</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    `
    techGallery.innerHTML = html;
})
