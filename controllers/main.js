const mainPage = (req, res) => res.render('pages/index')
const aboutmePage = (req,res) => res.render('pages/aboutme')
const futurestudiesPage = (req,res) => res.render('pages/future_studies')

module.exports = {
	mainPage,
	aboutmePage,
	futurestudiesPage
}
