import { useFormik } from "formik";
import "./resume.css";
import { NavLink } from "react-router-dom";

const Name = (props) => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      firstname: "",
      lastname: "",
      mail: "",
    },
  });

  return (
    <div className="contactpage">
      <div className="card text-center position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card-header">
          <h5>contact:</h5>
        </div>
        <div className="card-body">
          <form
            className="formikk "
            onSubmit={(ev) => props.submitContact(ev, formik.values)}
          >
            <div className="input-group shadow-lg mb-2 bg-body rounded ">
              <span className="input-group-text" id="basic-addon1">
                First-name:
              </span>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                placeholder="first name..."
                aria-describedby="basic-addon1"
                name="firstname"
                onChange={formik.handleChange}
              />
            </div>
            <div className="input-group shadow-lg mb-2 bg-body rounded ">
              <span className="input-group-text" id="basic-addon1">
                Last-name:
              </span>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                placeholder="last-name..."
                aria-describedby="basic-addon1"
                name="lastname"
                onChange={formik.handleChange}
              />
            </div>
            <div className="input-group shadow-lg mb-2 bg-body rounded ">
              <span className="input-group-text" id="basic-addon1">
                phone:
              </span>
              <input
                required
                autoFocus
                type="tel"
                className="form-control"
                placeholder="Phone..."
                aria-describedby="basic-addon1"
                name="phone"
                onChange={formik.handleChange}
              />
            </div>
            <div className="input-group shadow-lg mb-2 bg-body rounded ">
              <span className="input-group-text" id="basic-addon1">
                e-mail:
              </span>
              <input
                required
                autoFocus
                type="email"
                min={1}
                max={40}
                className="form-control"
                placeholder="Mail..."
                aria-describedby="basic-addon1"
                name="mail"
                onChange={formik.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-dark mt-2 mb-2">
              <i class="bi bi-send-check"></i>submit
            </button>

            <button
              type="reset"
              className="btn btn-outline-dark mt-2 mb-2 ms-4 "
            >
              reset <i class="bi bi-trash3"></i>
            </button>
          </form>
        </div>
        <div class="card-footer text-muted">
          <NavLink to={"/"}>
            <button className="btn btn-outline-dark">
              <i class="bi bi-arrow-left-circle"></i> back
            </button>
          </NavLink>
          <NavLink to={"/aboutme"}>
            <button className="btn btn-outline-dark mt-2 mb-2 me-4 ms-4">
              Next <i class="bi bi-arrow-right-circle"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Name;
