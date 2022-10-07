const GIPHY_API = '2NITTkq63FcnEbalBfGj0OVSBxR1CzOd';

(function () {
    const img = document.querySelector('img');
    const button = document.querySelector('button');

    button.addEventListener('click', (e) => fetchGIF());

    fetchGIF('hello');

    function fetchGIF(term) {
        const searchInput = document.querySelector('input').value;
        const searchTerm = encodeURIComponent(term || searchInput);

        if (searchTerm === '') fetchGIF('empty');

        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API}&s=${searchTerm}`, {
            mode: 'cors',
        })
            .then(function (response) {
                return response.json();
            })
            .catch(function (response) {
                fetchGIF('404');
            })
            .then(renderGIF);
    }

    function renderGIF(response) {
        const url = response.data.images.original.url;

        img.src = url;
    }
})();
