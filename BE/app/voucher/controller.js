const Voucher = require('./model');
const Category = require('../category/model');
const Nominal = require('../nominal/model');

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus")

            const alert = { message: alertMessage, status: alertStatus}
            const voucher = await Voucher.find();
            res.render('admin/voucher/view_category', {
                voucher,
                alert
            });
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/voucher');
        }
    },

    viewCreate : async(req, res) => {
        try {
            const category = await Category.find();
            const nominal = await Nominal.find();
            res.render('admin/voucher/create',
              category,
              nominal
            );
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/voucher');
        }
    },
/*
    actionCreate : async(req, res) => {
        try {
            const { name } = req.body

            const category = await Category({ name });
            await category.save();

            req.flash('alertMessage', "berhasil tambah kategori");
            req.flash('alertStatus', "success");

            res.redirect('/category');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/category');
        }
    },

    viewEdit : async(req, res) => {
        try {
            const { id } = req.params;

            const category = await Category.findOne({_id : id});

            req.render('admin/category/edit', {
                category
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/category');
        }
    },

    actionEdit : async(req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const category = await Category.findOneAndUpdate({
                _id: id
            }, {
                name
            });

            req.flash('alertMessage', "berhasil ubah kategori");
            req.flash('alertStatus', "success");

            res.redirect('/category')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/category');
        }
    },

    actionDelete : async(req, res) => {
        try {
            const { id } = req.params;

            const category = await Category.findOneAndRemove({
                _id: id
            });

            req.flash('alertMessage', "berhasil hapus kategori");
            req.flash('alertStatus', "success");

            res.redirect('/category');

        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/category');
        }
    }
*/
}