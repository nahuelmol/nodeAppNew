const mainPage = (req, res) => res.render('pages/index')
const examplePage = (req,res) => res.render('pages/example')

module.exports = {
	mainPage,
	examplePage
}