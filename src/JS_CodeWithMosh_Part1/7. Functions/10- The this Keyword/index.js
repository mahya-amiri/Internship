// The this keyword
    // method -> obj
        const video ={
            title: 'a',
            play() {
                console.log(this);
            }
        };
    // function -> global
        function Video(title) {
            this.title = title;
            console.log(this);
        }
        const v = new Video('B'); //{} a new empty obj (without new, we have window obj)
    const video2 = {
        title: 'c',
        tags: ['x', 'y', 'z'],
        showTags() {
            this.tags.forEach(function(tag){
                console.log(this.title, tag);
            }, this);
        }
    };
    video2.showTags();
