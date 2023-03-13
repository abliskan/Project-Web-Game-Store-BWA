const Category = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            res.render('admin/category/view_category');
        } catch (err) {
            console.log(err);
        }
    },
    viewCreate : async(req, res) => {
        try {
            res.render('admin;/category/category');
        } catch (err) {
            console.log(err);
        }
    },
    actionCreate : async(req, res) => {
        try {
            const { name } = req.body

            const category = await Category({ name });
            await category.save();

            res.redirect('/category');
        } catch (err) {
            console.log(err);
        }
    }
}