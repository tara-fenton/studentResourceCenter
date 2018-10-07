module.exports = function(bot) {
    bot.hear(/test/, function(res) {
        return res.send("Robot is running!");
    });

    bot.hear(/hi/, function(res) {
        return res.send("Hello!");
    });

    bot.respond(/What's your favorite food?/, function(res) {
        return res.send("I'm a robot--I don't eat food!");
    });
};
