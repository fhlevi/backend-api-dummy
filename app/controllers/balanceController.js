exports.balance_check = function (req, res) {
    let data = {
        status: 200,
        data: {}
    }
    
    if(!!req.headers.authorization) {
        data.data = {
            message: "Saldo Anda Mencukupi untuk Transaksi Ini"
        }
    } else {
        data.status = 401
        data.data = {
            message: 'User belum terotentikasi. Silahkan login!'
        }
    }

    res.status(data.status).json(data.data)
}