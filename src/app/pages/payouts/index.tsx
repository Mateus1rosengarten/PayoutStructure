import PayoutsTable from "../components/table"


const fakeTable = [{
  id:"PY-01",
  createdAt:'25/01/2025',
  status: 'waiting',
  amount: 2500
},
{
id:"PY-02",
createdAt:'25/01/2025',
status: 'waiting',
amount: 2800
},
{
    id:"PY-03",
    createdAt:'25/01/2025',
    status: 'waiting',
    amount: 2800
    },
    {
        id:"PY-04",
        createdAt:'25/01/2025',
        status: 'waiting',
        amount: 2800
        },
        {
            id:"PY-05",
            createdAt:'25/01/2025',
            status: 'waiting',
            amount: 2800
            },
            {
                id:"PY-06",
                createdAt:'25/01/2025',
                status: 'waiting',
                amount: 2800
                },
                {
                    id:"PY-07",
                    createdAt:'25/01/2025',
                    status: 'waiting',
                    amount: 2800
                    },

];

const PayoutsDashboard : React.FC = () => {

    return(
        <>
        <PayoutsTable transactions={fakeTable} />
        </>
    );

};

export default PayoutsDashboard;