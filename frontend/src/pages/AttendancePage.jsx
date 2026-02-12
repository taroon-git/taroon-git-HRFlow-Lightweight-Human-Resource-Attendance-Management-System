import { useEffect, useState } from "react";
import API from "../services/api";

function AttendancePage() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const fetchAttendance = async (id) => {
    const res = await API.get(`/attendance/${id}`);
    setRecords(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/attendance", form);
      fetchAttendance(form.employeeId);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Attendance</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6"
      >
        <div className="grid grid-cols-3 gap-4">
          <select
            className="border p-2 rounded"
            value={form.employeeId}
            onChange={(e) =>
              setForm({ ...form, employeeId: e.target.value })
            }
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.fullName}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="border p-2 rounded"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <select
            className="border p-2 rounded"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Present</option>
            <option>Absent</option>
          </select>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Mark Attendance
        </button>
      </form>

      {records.length > 0 && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-4">Attendance Records</h2>
          <ul>
            {records.map((rec) => (
              <li key={rec.id}>
                {new Date(rec.date).toLocaleDateString()} - {rec.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AttendancePage;
