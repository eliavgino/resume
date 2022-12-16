import { useFormik } from "formik";
import "./resume.css";
import { NavLink } from "react-router-dom";

const Aboutme = (props) => {
  const formik = useFormik({
    initialValues: {
      aboutme: "",
    },
  });

  return (
    <div class="card text-center position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h5>
          About you <i class="bi bi-person-bounding-box"></i>
        </h5>
      </div>
      <div class="card-body">
        <form
          className="formikk "
          onSubmit={(ev) => props.submitAboutMe(ev, formik.values)}
        >
          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              Abot you:
            </span>
            <input
              required
              autoFocus
              type="text"
              minLength={1}
              maxLength={400}
              className="form-control"
              placeholder="about you..."
              aria-describedby="basic-addon1"
              name="aboutme"
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-outline-dark mt-2 mb-2 ">
            <i class="bi bi-send-check"></i> submit
          </button>

          <button type="reset" className="btn btn-outline-dark ms-4">
            reset <i class="bi bi-trash3"></i>
          </button>
        </form>
      </div>
      <div className="card-footer text-muted ">
        <NavLink to={"/name"}>
          <button className="btn btn-outline-dark mt-2 mb-2 me-4 ms-4">
            <i class="bi bi-arrow-left-circle"></i> back
          </button>
        </NavLink>
        <NavLink to={"/links"}>
          <button className="btn btn-outline-dark mt-2 mb-2 me-4 ms-4">
            Next <i class="bi bi-arrow-right-circle"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Aboutme;
