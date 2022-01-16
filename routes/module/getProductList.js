var express = require('express');
var router = express.Router();

router.get('/ppob/get/denom/:code', function(req, res) {
    const { authorization } = req.headers
    const { code } = req.params
    let data = {
        status: 200,
        data: {}
    }

    if(!!authorization) {
        if(code === 'TMONEYST') {
            data.data = {
                data: [
                    {
                        "status": "active",
                        "icon_url":
                        "https://cdn.mobilepulsa.net/img/logo/pulsa/small/telkomsel.png",
                        "pulsa_code": "htelkomsel1000",
                        "pulsa_op": "Telkomsel",
                        "pulsa_nominal": "1000",
                        "pulsa_details": "-",
                        "pulsa_price": 1900,
                        
                        "pulsa_type": "pulsa",
                        "masaaktif": "3"
                    },
                    {
                        "status": "active",
                        "icon_url":
                        "https://cdn.mobilepulsa.net/img/logo/pulsa/small/telkomsel.png",
                        "pulsa_code": "htelkomsel10000",
                        "pulsa_op": "Telkomsel",
                        "pulsa_nominal": "10000",
                        "pulsa_details": "-",
                        "pulsa_price": 10910,
                        "pulsa_type": "pulsa",
                        "masaaktif": "15"
                    },
                    {
                        "status": "active",
                        "icon_url":
                        "https://cdn.mobilepulsa.net/img/logo/pulsa/small/telkomsel.png",
                        "pulsa_code": "htelkomsel100000",
                        "pulsa_op": "Telkomsel",
                        "pulsa_nominal": "100000",
                        "pulsa_details": "-",
                        "pulsa_price": 97500,
                        "pulsa_type": "pulsa",
                        "masaaktif": "60"
                    },
                    {
                        "status": "active",
                        "icon_url":
                        "https://cdn.mobilepulsa.net/img/logo/pulsa/small/telkomsel.png",
                        "pulsa_code": "htelkomsel1000000",
                        "pulsa_op": "Telkomsel",
                        "pulsa_nominal": "1000000",
                        "pulsa_details": "-",
                        "pulsa_price": 1000000,
                        "pulsa_type": "pulsa",
                        "masaaktif": "330"
                    }
                ]
            }
        } else {
            data.status = 400
            data.data = {
                message: 'Tidak ada produk yang ditemukan untuk tipe akun ini.'
            }
        }
    } else {
        data.status = 401
        data.data = {
            message: 'User belum terotentikasi. Silahkan login!'
        }
    }

    res.status(data.status).json(data)
});

module.exports = router;
