const titles = document.querySelectorAll('[data-name="spoiler-title"]');console.log(titles);

for(let i = 0; i < titles.length; i++) {
    const itemTitle = titles[i];console.log(itemTitle);
    itemTitle.addEventListener('click', function() {
        console.log(this);
        this.nextElementSibling.classList.toggle('spoiler-body');
        this.classList.toggle('spoiler-open');
    })
}