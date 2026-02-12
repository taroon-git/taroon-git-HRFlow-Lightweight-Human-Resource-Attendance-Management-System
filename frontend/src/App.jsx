import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">
            HRMS Lite
          </h1>

          <div className="flex gap-6 text-gray-600 font-medium">
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "hover:text-purple-600 transition"
              }
            >
              Employees
            </NavLink>

            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "hover:text-purple-600 transition"
              }
            >
              Attendance
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<EmployeePage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
