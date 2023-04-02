export default function RekapKasMasukPerKK() {
    var arr: any = [{ "category": "Amazon", "month": "Feb", "total": 9.75 },

    { "category": "Amazon", "month": "Mar", "total": 169.44 },
    { "category": "Amazon", "month": "Apr", "total": 10.69 },
    { "category": "Amazon", "month": "May", "total": 867.0600000000001 },
    { "category": "Amazon", "month": "Jun", "total": 394.43999999999994 },
    { "category": "Amazon", "month": "Jul", "total": 787.2400000000001 },
    { "category": "Amazon", "month": "Aug", "total": 1112.4400000000003 },
    { "category": "Amazon", "month": "Sep", "total": 232.86999999999998 },
    { "category": "Amazon", "month": "Oct", "total": 222.26999999999998 },
    { "category": "Amazon", "month": "Nov", "total": 306.09999999999997 },
    { "category": "Ebay", "month": "Apr", "total": 1096.2599999999998 },
    { "category": "Ebay", "month": "Dec", "total": 1096.2599999999998 }];

    var o = arr.reduce((a: any, b: any) => {
        a[b.category] = a[b.category] || [];
        a[b.category].push({ [b.month]: b.total });
        return a;
    }, {});

    var a = Object.keys(o).map(function (k) {
        return { category: k, month: Object.assign.apply({}, o[k]) };
    });

    console.log(a);

    // [
    //     {
    //         "category": "Amazon",
    //         "month": {
    //             "Feb": 9.75,
    //             "Mar": 169.44,
    //             "Apr": 10.69,
    //             "May": 867.0600000000001,
    //             "Jun": 394.43999999999994,
    //             "Jul": 787.2400000000001,
    //             "Aug": 1112.4400000000003,
    //             "Sep": 232.86999999999998,
    //             "Oct": 222.26999999999998,
    //             "Nov": 306.09999999999997
    //         }
    //     },
    //     {
    //         "category": "Ebay",
    //         "month": {
    //             "Apr": 1096.2599999999998,
    //             "Dec": 1096.2599999999998
    //         }
    //     }
    // ]

    return (
        <>
            {a.map((b) => {
                return (
                    <>
                        <p>{b.category}</p>
                        <p>{b.month['Apr'].toString()}</p>
                    </>
                )
            })}
        </>
    )
}