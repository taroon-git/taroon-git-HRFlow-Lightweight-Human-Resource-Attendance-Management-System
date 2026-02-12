import { useEffect, useState } from "react";
import API from "../services/api";

function DashboardPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await API.get("/dashboard");
        setData(res.data);
    };

    if (!data) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-sm opacity-80">Total Employees</h2>
                    <p className="text-3xl font-bold mt-2">
                        {data.totalEmployees}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-sm opacity-80">Present Today</h2>
                    <p className="text-3xl font-bold mt-2">
                        {data.presentToday}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-sm opacity-80">Absent Today</h2>
                    <p className="text-3xl font-bold mt-2">
                        {data.absentToday}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
