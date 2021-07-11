import React from "react";

const ScheduleLocation = () => {
  return (
    <div className='form mt-3'>
      <form>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <label className='mb-3'>
              Select the type of className <span>*</span>
            </label>

            <div className='radio-wrapper radio-block'>
              <label className='radio-btn'>
                This is a one-time className
                <input type='radio' name='radio' />
                <span className='checkmark'></span>
              </label>
              <label className='radio-btn'>
                This is a multi-session className with a repeating schedule
                <input type='radio' name='radio' />
                <span className='checkmark'></span>
              </label>
            </div>
          </div>
          <div className='col-sm-4 pt-4'>
            <label>
              If your classes cater to kids, writng the age range makes it
              easier for parents to find relevant classes
            </label>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-5'>
            <label className='form-label'>Batch Name</label>
            <input
              type='text'
              className='form-control'
              id='classTitle'
              aria-describedby='classTitleHelp'
              placeholder='E.g. Afternoon Dance with Kate'
            />
          </div>
          <div className='col-sm-4 offset-sm-1 pt-4'>
            <label>
              Batch name allows for easy identification of different time
              options for customers and team. You can change this later
            </label>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-3'>
            <h4>Date and time</h4>
            <label className='form-label'>Start date</label>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='dateInput'
                placeholder='DD / MM / YYYY'
              />
              <span className='input-group-text' id='basic-addon1'>
                <i className='bi bi-calculator'></i>
              </span>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-3'>
            <label className='form-label'>Class repeat pattern</label>
            <div className='dropdown'>
              <button
                className='btn form-control dropdown-toggle'
                type='button'
                id='classRepeat'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Weekly
              </button>
              <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Daily
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Weekly
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Monthly
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-3'>
            <label className='form-label'>Class start time</label>
            <div className='row'>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  id='dateInput'
                  placeholder='hh / mm'
                />
              </div>
              <div className='col'>
                <div
                  className='btn-group time-btn-group'
                  role='group'
                  aria-label='Basic radio toggle button group'
                >
                  <input
                    type='radio'
                    className='btn-check'
                    name='startbtnradio'
                    id='starttimeam'
                    checked
                  />
                  <label className='btn btn-outline-primary'>AM</label>
                  <input
                    type='radio'
                    className='btn-check'
                    name='startbtnradio'
                    id='starttimepm'
                  />
                  <label className='btn btn-outline-primary'>PM</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-3'>
            <label className='form-label'>Class end time</label>
            <div className='row'>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  id='dateInput'
                  placeholder='hh / mm'
                />
              </div>
              <div className='col'>
                <div
                  className='btn-group time-btn-group'
                  role='group'
                  aria-label='Basic radio toggle button group'
                >
                  <input
                    type='radio'
                    className='btn-check'
                    name='endbtnradio'
                    id='endtimeam'
                  />
                  <label className='btn btn-outline-primary'>AM</label>
                  <input
                    type='radio'
                    className='btn-check'
                    name='endbtnradio'
                    id='endtimepm'
                  />
                  <label className='btn btn-outline-primary'>PM</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <label className='form-label'>Days of recurring</label>

          <div className='col-sm-5'>
            <div
              className='btn-group day-btn-group'
              role='group'
              aria-label='Basic checkbox toggle button group'
            >
              <input type='checkbox' className='btn-check' id='btncheck1' />
              <label className='btn btn-outline-primary'>M</label>

              <input type='checkbox' className='btn-check' id='btncheck2' />
              <label className='btn btn-outline-primary'>T</label>

              <input type='checkbox' className='btn-check' id='btncheck3' />
              <label className='btn btn-outline-primary'>W</label>

              <input type='checkbox' className='btn-check' id='btncheck4' />
              <label className='btn btn-outline-primary'>T</label>

              <input type='checkbox' className='btn-check' id='btncheck5' />
              <label className='btn btn-outline-primary'>F</label>

              <input type='checkbox' className='btn-check' id='btncheck6' />
              <label className='btn btn-outline-primary'>S</label>

              <input type='checkbox' className='btn-check' id='btncheck7' />
              <label className='btn btn-outline-primary'>S</label>
            </div>
          </div>
          <div className='col-sm-4 offset-sm-1 pt-4'></div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-4'>
            <div className='row'>
              <div className='col'>
                <label className='form-label mt-2'>Repeat every</label>
              </div>
              <div className='col'>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='classRepeat'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    1
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        1
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        2
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <label className='form-label mt-2'>Week(s)</label>
              </div>
            </div>
          </div>
          <div className='col-sm-4 offset-sm-2'>
            <label>
              Select 1 if className schedule repeats every week, select 2 for
              fortnightly classes etc.
            </label>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-5'>
            <div className='row'>
              <div className='col'>
                <label className='form-label mt-2'>Class ends</label>
              </div>
              <div className='col'>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='classRepeat'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    on
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        on
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        off
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='dateInput'
                    placeholder='DD / MM / YYYY'
                  />
                  <span className='input-group-text' id='basic-addon1'>
                    <i className='bi bi-calculator'></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 offset-sm-1 pt-4'></div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-5'>
            <div className='row'>
              <div className='col'>
                <label className='form-label mt-2'>Class ends</label>
              </div>
              <div className='col'>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='classRepeat'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    after
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        after
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        after
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='classRepeat'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    1
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        1
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        2
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <label className='form-label mt-2'>occurences</label>
              </div>
            </div>
          </div>
          <div className='col-sm-4 offset-sm-2 pt-4'></div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-4'>
            <div className='row'>
              <div className='col'>
                <label className='form-label mt-2'>Class ends</label>
              </div>
              <div className='col'>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='classRepeat'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    never
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='classRepeat'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        after
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        after
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 offset-sm-2 pt-4'></div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-4'>
            <label className='form-label'>Timezone</label>
            <div className='dropdown'>
              <button
                className='btn form-control dropdown-toggle'
                type='button'
                id='minAge'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Time zone: &lt; Location and GMT time &gt;
              </button>
              <ul className='dropdown-menu' aria-labelledby='minAge'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Time zone: Time zone: &lt; Location and GMT time &gt;
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Time zone: Time zone: &lt; Location and GMT time &gt;
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Time zone: Time zone: &lt; Location and GMT time &gt;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-5'>
            <h4>Location and instructor</h4>
            <label className='form-label mt-2'>
              Location for this className
            </label>
            <div>
              <button type='button' className='btn btn-primary me-2'>
                Online
              </button>
              <button type='button' className='btn btn-outline-primary me-2'>
                Business address
              </button>
              <button type='button' className='btn btn-outline-primary'>
                Customer’s address
              </button>
            </div>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-6'>
            <label className='mb-3'>
              Instructors <span>*</span>
            </label>

            <div className='radio-wrapper radio-block'>
              <label className='radio-btn'>
                No instructors assigned to the className
                <input type='radio' name='instru-radio' />
                <span className='checkmark'></span>
              </label>
              <label className='radio-btn'>
                Assign instructors for the className
                <input type='radio' name='instru-radio' />
                <span className='checkmark'></span>
              </label>
            </div>

            <a type='button' className='btn btn-link'>
              Missing an instructor? Add here
            </a>
          </div>
          <div className='col-sm-4 pt-4'>
            <label>
              Assigning instructors to a className allows them to keep track of
              bookings. Customers will be asked to select a teacher if multiple
              teachers are selected for the same batch
            </label>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-5'>
            <h4>Price and Participants</h4>
            <label className='form-label mt-2'>Number of booking slots</label>
            <input
              type='text'
              className='form-control'
              id='numBooking'
              placeholder='E.g.10'
            />
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-4'>
            <label className='form-label mt-2'>Price for one className</label>
            <div className='dropdown-group'>
              <div className='dropdown'>
                <button
                  className='btn form-control dropdown-toggle'
                  type='button'
                  id='priceDrop'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  INR
                </button>
                <ul className='dropdown-menu' aria-labelledby='priceDrop'>
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
                placeholder='E.g.00'
              />
            </div>
          </div>
          <div className='col-sm-4  offset-sm-2 pt-4'>
            <label>
              You can change your default currency and tax setup is under
              settings. Additional pricing options are available in next step
            </label>
          </div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-5'>
            <button type='button' className='btn btn-outline-orange btn-lg'>
              Back
            </button>
            <button type='button' className='btn btn-orange btn-lg float-end'>
              Save and preview
            </button>
          </div>
          <div className='col-sm-4'></div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleLocation;
