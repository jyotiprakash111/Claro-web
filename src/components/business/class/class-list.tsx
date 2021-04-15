import { Link } from "react-router-dom";
import { Class } from "./class";

export const ClassListComponent = () => {
  return (
    <>
      <div className='main-heading'>
        <h1>Services</h1>
      </div>
      <div className='button-action mb-2'>
        <button type='button' className='btn btn-primary'>
          Classes
        </button>
        <button type='button' className='btn btn-outline-primary'>
          Appointment
        </button>
        <Link
          to='/new-class'
          type='button'
          className='btn btn-primary float-end'
        >
          Add New
        </Link>
      </div>
      <Class />
    </>
  );
};
