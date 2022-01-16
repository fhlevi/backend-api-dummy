exports.topupInquiry = function(req, res) {
    const { authorization } = req.headers
    const { productCode, amount, billNumber } = req.body

    let data = {
        status: 200,
        data: {}
    }

    if(authorization) {
        if(productCode.length && amount.length && billNumber.length) {
            data.data = {
                data: {
                    "resultCode": 0,
                    "resultDesc": "Success",
                    "transactionID": "195210906151622870",
                    "refNo": "tmoney6dqcgo9u55slelf2B9rek0zu1E5JylZo",
                    "lastBalance": 0,
                    "productCode": "TMONEYISATDATA",
                    "productName": "INDOSAT PAKET DATA",
                    "institution": "Indosat Ooredoo",
                    "billNumber": "085711516999",
                    "billAmount": 35000,
                    "feeAmount": 770,
                    "totalAmount": 35794,
                    "addInfo": {
                        "User Name": "",
                        "Password": "",
                        "Expired Time": ""
                    },
                    "bit61": "",
                    "timeStamp": "2021-09-06T15:17:25.622387579+07:00"
                }
            }
        } else {
            data.status = 400
            data.data = {
                message: 'Informasi produk tersebut tidak ada di system kami'
            }
        }
    } else {
        data.status = 401
        data.data = {
            message: 'User belum terotentikasi. Silahkan login!'
        }
    }

    res.status(data.status).json(data)
}