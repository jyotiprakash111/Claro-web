import React from "react";

const AdditionalDetails = () => {
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <div className='accordion accordion-additional' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Basic information
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <strong>This is the first item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Schedule and Location
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Pricing
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                Additional details
                <a href=''>Edit</a>
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <form>
                  <div className='row mb-3'>
                    <div className='col-sm-6'>
                      <p>Details required from customer (optional)</p>

                      <label className='container-checkbox'>
                        {" "}
                        Phone number of the customer
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>

                      <label className='container-checkbox'>
                        {" "}
                        Option to add comments while booking
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>

                      <label className='container-checkbox'>
                        {" "}
                        Customer address for in-person className
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                  </div>

                  <div className='row mb-3'>
                    <div className='col-sm-4'>
                      <label className='form-label'>
                        Registration closes (optional)
                      </label>
                      <div className='row'>
                        <div className='col'>
                          <input
                            type='text'
                            className='form-control'
                            id='dateInput'
                            placeholder='hh : mm'
                          />
                        </div>
                        <div className='col pt-2'>
                          <label>before the className starts</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-sm-6'>
                      <label className='form-label mt-2'>
                        Customer message on booking (optional)
                      </label>
                      <textarea
                        className='form-control'
                        cols={30}
                        rows={3}
                        placeholder='Hello! Thank you for your request. We will send you the className details soon. Please get in touch for any question'
                      ></textarea>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-sm-6'>
                      <label className='form-label mt-2'>
                        Preparation required for the className (optional)
                      </label>
                      <textarea
                        className='form-control'
                        cols={30}
                        rows={3}
                        placeholder='Hello! Thank you for your request. We will send you the className details soon. Please get in touch for any question'
                      ></textarea>
                    </div>
                  </div>

                  <div className='row mb-3'>
                    <div className='col-sm-6'>
                      <p>Cancellation policy (optional)</p>

                      <div className='row'>
                        <div className='col-sm-12'>
                          <label className='container-checkbox'>
                            {" "}
                            No cancellation allowed
                            <input type='checkbox' />
                            <span className='checkmark'></span>
                          </label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col pt-2'>
                          <label className='container-checkbox'>
                            {" "}
                            Allow cancellation
                            <input type='checkbox' />
                            <span className='checkmark'></span>
                          </label>
                        </div>
                        <div className='col'>
                          <input
                            type='text'
                            className='form-control'
                            id='dateInput'
                            placeholder='hh : mm'
                          />
                        </div>
                        <div className='col pt-2'>
                          <label>before the className starts</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-6 mb-3 mt-5'>
                      <button
                        type='button'
                        className='btn btn-outline-orange btn-lg ps-4 pe-4'
                      >
                        Save
                      </button>
                      <button
                        type='button'
                        className='btn btn-orange btn-lg ps-4 pe-4 ms-4'
                      >
                        Publish the className
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
