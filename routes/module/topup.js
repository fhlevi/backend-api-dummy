var express = require('express');
var router = express.Router();

router.post('/ppob/top-up', function(req, res) {
    const { authorization } = req.headers
    const { 
        productCode, amount, billNumber, transactionID, refNo, pin, puchaseName, 
        category, qrisBalancePaid, ppobBalancePaid, sellingPrice 
    } = req.body

    const mockValidate = {
        pin: 112233
    }

    let data = {
        status: 200,
        data: {}
    }

    if(authorization) {
        if(
            (pin == mockValidate.pin) && 
            (checkLength(productCode) && checkLength(amount) && checkLength(billNumber) && checkLength(transactionID) && checkLength(refNo) && checkLength(puchaseName) && checkLength(category) && checkLength(qrisBalancePaid) && checkLength(ppobBalancePaid) && checkLength(sellingPrice))
        ) {
            data.data = {
                "data": {
                    "resultCode": 0,
                    "resultDesc": "Success",
                    "transactionID": "195210805195305825",
                    "refNo": "tmoney3r9pq3ea0lmvVbHsY1tc3vgIH8fiEMpo",
                    "lastBalance": 81380,
                    "productCode": "TMONEYTSELDATA",
                    "productName": "TELKOMSEL PAKET DATA",
                    "institution": "Telkomsel Indonesia",
                    "billNumber": "081218192076",
                    "billAmount": 10000,
                    "feeAmount": 110,
                    "totalAmount": 10810,
                    "addInfo": {
                        "User Name": "",
                        "Password": "",
                        "Expired Time": ""
                    },
                    "bit61":
                    "item=pulsa&item_number=081218192076&item_amount=TSELDATA10&time=2021-08-05+19%3A54%3A32&amount=10700&fee_amount=0&total_amount=10700",
                    "timeStamp": "2021-08-05T19:54:31.925948404+07:00"
                }
            }
        } else {
            data.status = 400
            data.data = {
                message: 'Transaksi pembelian pulsa gagal dilakukan'
            }
        }
    } else {
        data.status = 401
        data.data = {
            message: 'User belum terotentikasi. Silahkan login!'
        }
    }

    res.status(data.status).json(data)
})

function checkLength(val) {
    const data = String(val)
    return data.length
}

module.exports = router