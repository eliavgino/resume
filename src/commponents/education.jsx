import { useFormik } from "formik";
import "./resume.css";
import { NavLink } from "react-router-dom";

const Education = (props) => {
  const formik = useFormik({
    initialValues: {
      startdate: "",
      enddate: "",
      occupation: "",
    },
  });

  return (
    <div class="card text-center position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h5>
          Education <i class="bi bi-book"></i>{" "}
        </h5>
      </div>
      <div class="card-body">
        <form
          className="formikk "
          onSubmit={(ev) => props.submiteducation(ev, formik.values)}
        >
          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              start date:
            </span>
            <input
              required
              autoFocus
              type="date"
              className="form-control"
              placeholder="beginig... "
              aria-describedby="basic-addon1"
              name="startdate"
              onChange={formik.handleChange}
              id="firstdate"
            />
          </div>
          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              end date:
            </span>
            <input
              autoFocus
              type="date"
              className="form-control"
              placeholder="end... "
              aria-describedby="basic-addon1"
              name="enddate"
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              occupation:
            </span>
            <input
              required
              autoFocus
              type="text"
              min={1}
              max={40}
              className="form-control"
              placeholder="occupation... "
              aria-describedby="basic-addon1"
              name="occupation"
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark mt-2 mb-2 me-4 ms-4"
          >
            <i class="bi bi-send-check"></i> submit
          </button>
          <button type="submit" className="btn btn-outline-dark mt-2 mb-2 me-4">
            <i class="bi bi-plus-circle"></i> Add another
          </button>

          <button type="reset" className="btn btn-outline-dark mt-2 mb-2 me-4 ">
            reset <i class="bi bi-trash3"></i>
          </button>
        </form>
      </div>
      <div class="card-footer text-muted">
        <NavLink to={"/skills"}>
          <button className="btn btn-outline-dark">
            <i class="bi bi-arrow-left-circle"></i> back
          </button>
        </NavLink>
        <NavLink to={"/work"}>
          <button
            type="submit"
            className="btn btn-outline-dark mt-2 mb-2 me-4 ms-4"
          >
            Next <i class="bi bi-arrow-right-circle"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Education;
