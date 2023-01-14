const mainPage = (req, res) => res.render('pages/index')
const examplePage = (req,res) => res.render('pages/aboutme')

module.exports = {
	mainPage,
	aboutmePage
}
