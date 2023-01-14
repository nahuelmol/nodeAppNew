const mainPage = (req, res) => res.render('pages/index')
const aboutmePage = (req,res) => res.render('pages/aboutme')

module.exports = {
	mainPage,
	aboutmePage
}
