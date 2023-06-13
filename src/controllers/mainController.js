module.exports = {
    home: (req, res) => {
        res.render("index");
    },

    login: (req, res) => {
        res.render("login");
    },

    loginRegistro: (req, res) =>{
        res.render("loginRegistro");
    },

    foro: (req, res) =>{
        res.render("foro");
    },
    blog: (req, res) =>{
        res.render("blog");
    },
    
};
