//Homework

//Contructor
//

var Gallery = function Gallery(){
    this.img = document.getElementById('img');
    this.container = document.getElementById('currentImage');
    this.url = ['./img/img01.jpg', './img/img02.jpg', './img/img03.jpg', './img/img04.jpg', './img/img05.jpg', './img/img06.jpg', './img/img07.jpg', './img/img08.jpg', './img/img09.jpg', './img/img10.jpg'];
    this.items = 10;
    this.index = 0;
    this.nextBtn = document.getElementById('next');
    this.backBtn = document.getElementById('back');
};

//Prototype
//

Gallery.prototype = {
    constructor: Gallery,

    showImage: function(){
        var self = this;
        //Default
        self.img.src = self.url[0];
        //Events
        self.nextBtn.addeventListener('click', Gallery.prototype.forWard());
        self.forWard.addeventListener('click', Gallery.prototype.backWard());
    },

    backWard: function(){
        
        var self = this;
        var index = self.index;
        
        if(index > 0){
            index--;
        } else {
            index = self.items-1;
        }
            
        self.img.src = self.url[index];

    },

    forWard: function(){

        var self = this;
        var index = self.index;

        if(index < self.items-1){
            index++;
        } else {
            index = self.index;
                
        }

        self.img.src = self.url[index];
    }
}

var newGallery = new Gallery;
newGallery.showImage();

