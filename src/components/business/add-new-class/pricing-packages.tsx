import React from "react";

const PricingPackages = () => {
  return (
    <>
      <label className='d-block mb-3'>
        50% completed arlready! Let’s get started with adding prices for the
        scheduled classes{" "}
      </label>

      <h4>Schedule</h4>

      <div className='row'>
        <div className='col-sm-10'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Batch name</th>
                <th scope='col'>Batch start date</th>
                <th scope='col'>Batch end date</th>
                <th scope='col'>Total sessions</th>
                <th scope='col'>Instructor(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope='row'>Weekday morning</td>
                <td>15 Jan</td>
                <td>10 Feb</td>
                <td>6</td>
                <td>June, Mary</td>
              </tr>
              <tr>
                <td scope='row'>Saturday Mon</td>
                <td>20 Jan</td>
                <td>14 Feb</td>
                <td>10</td>
                <td>June</td>
              </tr>
              <tr>
                <td scope='row'>21 Feb 3:00pm</td>
                <td>21 Feb</td>
                <td>21 Feb</td>
                <td>1</td>
                <td>No</td>
              </tr>
              <tr>
                <td scope='row' className='pb-5'></td>
                <td className='pb-5'></td>
                <td className='pb-5'></td>
                <td className='pb-5'></td>
                <td className='pb-5'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='form mt-3'>
        <form>
          <div className='row mb-4'>
            <div className='col-sm-6'>
              <h4>Pricing</h4>
              <div className='row'>
                <div className='col-sm-6'>
                  <label className='form-label mt-2'>
                    Price for one className
                  </label>
                  <div className='dropdown-group'>
                    <div className='dropdown'>
                      <button
                        className='btn form-control dropdown-toggle'
                        type='button'
                        id='priceClass'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        INR
                      </button>
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='priceClass'
                      >
                        <li>
                          <a className='dropdown-item' href='#'>
                            INR
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            USD
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            UAE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input
                      type='text'
                      className='form-control form-group-text'
                      placeholder='E.g.100'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <label className='form-label mt-2'>
                    Special price (optional)
                  </label>
                  <div className='dropdown-group'>
                    <div className='dropdown'>
                      <button
                        className='btn form-control dropdown-toggle'
                        type='button'
                        id='priceSpc'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        INR
                      </button>
                      <ul className='dropdown-menu' aria-labelledby='priceSpc'>
                        <li>
                          <a className='dropdown-item' href='#'>
                            INR
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            USD
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            UAE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input
                      type='text'
                      className='form-control form-group-text'
                      placeholder='E.g.100'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4 pt-5'>
              <label>
                We have picked up regular className price you entered earlier
                for a drop-in customer.{" "}
              </label>
            </div>
          </div>

          <div className='row mb-5'>
            <div className='col-sm-12'>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#addPricePlan'
              >
                Add a price plan
              </button>

              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#addTrailClass'
              >
                Add trial price plan
              </button>

              <button
                type='button'
                className='btn btn-outline-primary'
                data-bs-toggle='modal'
                data-bs-target='#addNewSubs'
              >
                New subscription fee
              </button>

              <button
                type='button'
                className='btn btn-outline-primary'
                data-bs-toggle='modal'
                data-bs-target='#previewSubs'
              >
                Preview of subscription fee
              </button>
            </div>
          </div>

          <div className='row mt-5 mb-4'>
            <div className='col-sm-5'>
              <button
                type='button'
                className='btn btn-outline-orange btn-lg ps-5 pe-5'
              >
                Back
              </button>
              <button
                type='button'
                className='btn btn-orange btn-lg float-end ps-4 pe-4'
              >
                Save and preview
              </button>
            </div>
            <div className='col-sm-4'></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PricingPackages;
