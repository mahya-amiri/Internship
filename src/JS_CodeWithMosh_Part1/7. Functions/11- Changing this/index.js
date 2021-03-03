// Changing this
const video = {
    title: 'c',
    tags: ['x', 'y', 'z'],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag));
    }
};
video.showTags();
