import { useEffect, useState } from "react";
import API from "../services/api";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/employees", form);
      setForm({
        employeeId: "",
        fullName: "",
        email: "",
        department: "",
      });
      fetchEmployees();
    } catch (error) {
      alert(error.response?.data?.message || "Error creating employee");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      alert("Error deleting employee");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Employee Management
      </h2>

      {/* Add Employee Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
        <h3 className="text-lg font-semibold mb-6 text-gray-700">
          Add New Employee
        </h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Employee ID"
            value={form.employeeId}
            onChange={(e) =>
              setForm({ ...form, employeeId: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            focus:border-transparent transition"
          />

          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            focus:border-transparent transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            focus:border-transparent transition"
          />

          <input
            type="text"
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            focus:border-transparent transition"
          />

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white px-6 py-2 rounded-xl 
              hover:opacity-90 transition font-medium shadow-sm"
            >
              {loading ? "Adding..." : "Add Employee"}
            </button>
          </div>
        </form>
      </div>

      {/* Employee List Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <h3 className="text-lg font-semibold mb-6 text-gray-700">
          Employee List
        </h3>

        {employees.length === 0 ? (
          <p className="text-gray-500">No employees found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Department</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {employees.map((emp) => (
                  <tr
                    key={emp.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{emp.employeeId}</td>
                    <td className="p-3 font-medium">
                      {emp.fullName}
                    </td>
                    <td className="p-3 text-gray-600">
                      {emp.email}
                    </td>
                    <td className="p-3">{emp.department}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-500 text-white px-4 py-1.5 rounded-lg 
                        hover:bg-red-600 transition text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeePage;
