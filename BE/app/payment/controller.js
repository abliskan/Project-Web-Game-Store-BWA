const Payment = require('./model');
const Bank = require('../bank/model');

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus")

            const alert = { message: alertMessage, status: alertStatus}
            const payment = await Payment.find().populate('banks');

            res.render('admin/payment/view_bank', {
                payment,
                alert
            });
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/payment');
        }
    },

    viewCreate : async(req, res) => {
        try {
            res.redirect('/admin/payment/create');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/payment');
        }
    },
    
    actionCreate : async(req, res) => {
        try {
            const { banks, type } = req.body

            const payment = await Payment({ banks, type });
            await payment.save();

            req.flash('alertMessage', "berhasil tambah nominal");
            req.flash('alertStatus', "success");

            res.redirect('/payment');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/payment');
        }
    },

/*
    actionDelete : async(req, res) => {
        try {
            const { id } = req.params;

            await Bank.findOneAndRemove({
                _id: id
            });

            req.flash('alertMessage', "berhasil hapus bank");
            req.flash('alertStatus', "success");

            res.redirect('/bank');

        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', `danger`);
            res.redirect('/bank');
        }
    }
*/
}