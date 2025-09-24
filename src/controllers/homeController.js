
const getHomePage = (req, res) => {
    res.send('Hello World from controller');
}

const getAboutPage = (req, res) => {
    res.send('This is the about page from controller');
}

const getContactPage = (req, res) => {
    res.render('sample.ejs');
}
export { 
    getHomePage,
    getAboutPage,
    getContactPage
};