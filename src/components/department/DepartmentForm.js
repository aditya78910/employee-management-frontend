function DepartmentForm({ department }) {
  return (
    <div className="container">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department Id</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <span name="depId" className="tag is-dark">
                {department.id}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                name="departmentName"
                placeholder="Text input"
                defaultValue={department.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentForm;
