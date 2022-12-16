import { useFormik } from "formik";
import "./resume.css";
import { NavLink } from "react-router-dom";

const Links = (props) => {
  const formik = useFormik({
    initialValues: {
      social: "",
      link: "",
    },
  });

  return (
    <div class="card text-center position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded">
      <div class="card-header ">
        <h5>
          Websie & social media <i class="bi bi-link-45deg"></i>
        </h5>
      </div>
      <div class="card-body">
        <form
          className="formikk "
          onSubmit={(ev) => props.submitLinks(ev, formik.values)}
        >
          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              Social:
            </span>
            <input
              required
              autoFocus
              type="text"
              min={1}
              max={600}
              className="form-control"
              placeholder="media..."
              aria-describedby="basic-addon1"
              name="social"
              onChange={formik.handleChange}
            />
          </div>

          <div className="input-group shadow-lg mb-2 bg-body rounded ">
            <span className="input-group-text" id="basic-addon1">
              Link:
            </span>
            <input
              required
              autoFocus
              type="text"
              min={1}
              max={600}
              className="form-control"
              placeholder="link..."
              aria-describedby="basic-addon1"
              name="link"
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark mt-2 mb-2 ">
            <i class="bi bi-send-check"></i> submit
          </button>
          <button type="submit" className="btn btn-outline-dark mt-2 mb-2 ms-4">
            <i class="bi bi-plus-circle"></i> Add another
          </button>
          <button type="reset" className="btn btn-outline-dark mt-2 mb-2  ms-4">
            reset <i class="bi bi-trash3"></i>
          </button>
        </form>
      </div>
      <div class="card-footer text-muted ">
        <NavLink to={"/aboutme"}>
          <button className="btn btn-outline-dark">
            <i class="bi bi-arrow-left-circle"></i>back
          </button>
        </NavLink>
        <NavLink to={"/skills"}>
          <button className="btn btn-outline-dark mt-2 mb-2  ms-4">
            Next <i class="bi bi-arrow-right-circle"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Links;
