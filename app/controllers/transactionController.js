exports.transactionHistory = function(req, res) {
    const { transactionType, startDate, stopDate } = req.query
    const { authorization } = req.headers
    
    let data = {
        status: 200,
        data: {}
    }

    if(authorization) {
        if(transactionType && startDate && stopDate) {
            data.data = {
                "data": [
                    {
                        "history_date": "2022-01-07 12:14:03",
                        "status": "success",
                        "transaction_id": "195220107121228477",
                        "description": "Isi Modal Usaha",
                        "qris_detail": [],
                        "detail_bank": [],
                        "detail_amount": {
                            "amount": 11100,
                            "fee": 0,
                            "eup": 11100
                        }
                    },
                    {
                        "history_date": "2022-01-06 10:54:22",
                        "status": "success",
                        "transaction_id": "195220106105248412",
                        "description": "Pembayaran PPOB",
                        "qris_detail": [],
                        "detail_bank": [],
                        "detail_amount": {
                            "amount": 4300,
                            "fee": 0,
                            "eup": 4300
                        }
                    },
                    {
                        "history_date": "2022-01-06 10:54:13",
                        "status": "success",
                        "transaction_id": "195220106105242016",
                        "description": "Isi Modal Usaha",
                        "qris_detail": [],
                        "detail_bank": [],
                        "detail_amount": {
                            "amount": 4300,
                            "fee": 0,
                            "eup": 4300
                        }
                    },
                    {
                        "history_date": "2021-12-31 07:57:13",
                        "status": "success",
                        "transaction_id": "195211231075541029",
                        "description": "Pembayaran PPOB",
                        "qris_detail": [],
                        "detail_bank": [],
                        "detail_amount": {
                            "amount": 20000,
                            "fee": 600,
                            "eup": 20600
                        }
                    },
                    {
                        "history_date": "2021-12-31 07:56:45",
                        "status": "success",
                        "transaction_id": "195211231075535505",
                        "description": "Isi Modal Usaha",
                        "qris_detail": [],
                        "detail_bank": [],
                        "detail_amount": {
                            "amount": 15485,
                            "fee": 0,
                            "eup": 15485
                        }
                    },
                ]
            }
        } else {
            data.status = 400
            data.data = {
                message: 'Informasi transaksi tersebut tidak tersedia'
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