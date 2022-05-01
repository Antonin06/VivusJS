document.addEventListener('DOMContentLoaded', function() {


    new Vivus('svg1',
        {
            type: "oneByOne", // delayed, sync, oneByOne
            duration: 200,
            file: 'img/svg1.svg',
            animTimingFunction: Vivus.EASE(),
        }
    );

    new Vivus('svg2',
        {
            type: "delayed", // delayed, sync, oneByOne
            duration: 200,
            file: 'img/svg1.svg',
            animTimingFunction: Vivus.EASE(),
        }
    );

    new Vivus('svg3',
        {
            type: "sync", // delayed, sync, oneByOne
            duration: 200,
            file: 'img/svg1.svg',
            animTimingFunction: Vivus.EASE(),
        }
    );


})