exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.haiThere = (req, res, next) => {
    res.send('<h1>Hai There!</h1>');
};