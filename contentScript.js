(function() {
    let head = document.createElement('head');
    let title = document.createElement('title');
    head.appendChild(title);
    document.documentElement.appendChild(head);

    let arxivId = window.location.href.match(/arxiv\.org\/pdf\/(.*?)\.pdf/)[1];
    fetch(`https://arxiv.org/abs/${arxivId}`)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const absDocument = parser.parseFromString(text, "text/html");
            const paperTitle = absDocument.querySelector('meta[name="citation_title"]').getAttribute('content');

            const setTitle = () => { 
                // The title doesn't change reliably unless we empty it first.
                title.text = '';
                title.text = paperTitle; 
            };
            setTitle();
            setTimeout(setTitle, 1000);
            setTimeout(setTitle, 2000);
            setTimeout(setTitle, 4000);
            setTimeout(setTitle, 8000);
            setTimeout(setTitle, 16000);
            setTimeout(setTitle, 32000);
            setTimeout(setTitle, 64000);
        });
})();