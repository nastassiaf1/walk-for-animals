module.exports = {
    server: './',
    files: 'dist/*.*',
    watch: true,
    watchOptions: {
        ignored: ['./db.json', './bs-config.js'],
    },
    open: false,
    notify: false,
    port: 4200,
    middleware: function (req, res, next) {
        const pathsToExclude = ['.js', '.css', '.png', '.jpg'];
        if (!pathsToExclude.some((ext) => req.url.includes(ext))) {
            req.url = '/index.html';
        }
        return next();
    },
};
