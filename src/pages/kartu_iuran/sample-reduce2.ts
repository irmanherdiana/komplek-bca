export default function transformedData() {

    const values = [{
        year: 2017,
        month: "Jan",
        revenue: 2000,
    },
    {
        year: 2017,
        month: "Feb",
        revenue: 3000,
    },
    {
        year: 2017,
        month: "Mar",
        revenue: 1000,
    },
    {
        year: 2016,
        month: "Jan",
        revenue: 5000,
    },
    {
        year: 2016,
        month: "Feb",
        revenue: 4000,
    },
    {
        year: 2016,
        month: "Mar",
        revenue: 2000,
    }
    ];

    // Use destructuration to access each data
    const transformedValues = values.reduce((tmp:any, {
        month,
        year,
        revenue,
    }) => {
        // Look for the month in tmp
        const monthInTmp = tmp.find((y: { Month: any }) => y.Month === month);

        // If it do not exist, push it
        if (!monthInTmp) {
            tmp.push({
                Month: month,

                // use the following syntax [var] to use a dynamical key
                [year]: revenue,
            });

            return tmp;
        }

        // if it exists update it
        // handle the case when we have two revenue in same year
        if (monthInTmp[year]) {
            monthInTmp[year] += revenue;

            return tmp;
        }

        monthInTmp[year] = revenue;

        return tmp;
    }, []);
}
