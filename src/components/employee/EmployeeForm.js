import React from "react";
import CustomCalendar from "../calendar/CustomCalendar";

function EmployeeForm({ employeeData }) {
  return (
    <div className="container">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Employee Id</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <span name="empId" className="tag is-dark">
                {employeeData.id}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Employee Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                name="employeeName"
                placeholder="Text input"
                defaultValue={employeeData.name}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Gender</label>
        </div>
        <div className="field-body">
          <div class="field is-wide">
            <div class="control">
              <label class="radio">
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  defaultChecked={employeeData.gender == "M"}
                />
                Male
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  defaultChecked={employeeData.gender == "F"}
                />
                Female
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  name="departmentId"
                  defaultValue={employeeData.department.id}
                >
                  <option value="-1">Select dropdown</option>
                  <option value="1">Technology</option>
                  <option value="2">Operations</option>
                  <option value="3">Finance</option>
                  <option value="4">Sustain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Date of Birth</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <CustomCalendar name="dob" value={employeeData.dob} />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Salary</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                name="salary"
                placeholder="Text input"
                defaultValue={employeeData.salary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
