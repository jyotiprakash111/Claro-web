import { TextField, Typography } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";

const BasicInfoForm = () => {
  return (
    <div className='form mt-3'>
      <Typography variant='subtitle1'>
        We are super excited to find you adding a new activity to your list!
        Kindly fill the following details:
      </Typography>
      <form>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label>Class Title</Form.Label>
            <TextField
              label='Class Title'
              variant='outlined'
              color='secondary'
              placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
            />

            <Form.Control
              type='text'
              id='classNameTitle'
              aria-describedby='classNameTitleHelp'
              placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
            />
            <Form.Text id='classNameTitleHelp' className='form-text'>
              We'll never share your email with anyone else.
            </Form.Text>
          </div>
          <div className='col-sm-4 pt-4'>
            <Form.Label>
              Add basic information about the className including the title
            </Form.Label>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label>Class Category</Form.Label>
            <Form.Control as='select' defaultValue='No Category'>
              <option>No Category</option>
              <option> Adults Yoga</option>
              <option> Kids Yoga</option>
              <option> Flexible Yoga</option>
            </Form.Control>

            {/* <!-- Button trigger modal --> */}
            <a
              type='button'
              className='btn btn-link'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              + Add another category
            </a>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label>Briefly describe this className (120 words)</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Shows on the className public page. Add className info/instructions'
              id='classNameInfo'
            />
          </div>
          <div className='col-sm-4'></div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label className='mb-3'>Age of your students</Form.Label>

            <div className='radio-wrapper radio-block'>
              <Form.Label className='radio-btn'>
                Everyone
                <input
                  type='radio'
                  //   checked='checked'
                  name='radio'
                />
                <span className='checkmark'></span>
              </Form.Label>
              <Form.Label className='radio-btn'>
                For adults
                <input type='radio' name='radio' />
                <span className='checkmark'></span>
              </Form.Label>
              <Form.Label className='radio-btn'>
                For children only (less than 18 years)
                <input type='radio' name='radio' />
                <span className='checkmark'></span>
              </Form.Label>
            </div>

            <div className='row mb-4'>
              <div className='col-sm-3 offset-sm-1'>
                <Form.Label>Min. age</Form.Label>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='minAge'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    0
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='minAge'>
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
                    <li>
                      <a className='dropdown-item' href='#'>
                        4
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        5
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-3'>
                <Form.Label>Max. age</Form.Label>
                <div className='dropdown'>
                  <button
                    className='btn form-control dropdown-toggle'
                    type='button'
                    id='maxAge'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    18
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='maxAge'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        14
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        15
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        16
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        17
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        18
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6 offset-sm-1'>
                <Form.Label className='container-checkbox'>
                  {" "}
                  Request adult presence
                  <input
                    type='checkbox'
                    // checked='checked'
                  />
                  <span className='checkmark'></span>
                </Form.Label>
              </div>
            </div>
          </div>
          <div className='col-sm-4 pt-4'>
            <Form.Label>
              If your classNamees cater to kids, writng the age range makes it
              easier for parents to find relevant classNamees
            </Form.Label>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label className='d-block mb-3'>
              What color code would you like to give?
            </Form.Label>
            <div
              className='circle-group'
              role='group'
              aria-label='Basic radio toggle button group'
            >
              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio1'
                //   autocomplete='off'
                checked
              />
              <Form.Label
                className='circle circle-lightblue active'
                //   for='btnradio1'
              >
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio2'
                //   autocomplete='off'
              />
              <Form.Label
                className='circle circle-dmiltri'
                // for='btnradio2'
              >
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-miltri'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-parrot'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-dparrot'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-myellow'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-lightorange'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-vilot'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-brangle'>
                <i className='bi bi-check2'></i>
              </Form.Label>

              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                //   autocomplete='off'
              />
              <Form.Label className='circle circle-dgrey'>
                <i className='bi bi-check2'></i>
              </Form.Label>
            </div>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <div className='row mb-4'>
          <div className='col-sm-6'>
            <Form.Label className='switch'>
              <input type='checkbox' checked />
              <span className='slider round'></span>
            </Form.Label>{" "}
            Enable online bookings{" "}
            <i
              className='bi bi-info-circle'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='With online bookings enabled customers can book the className directly on their own'
            ></i>
          </div>
          <div className='col-sm-4'></div>
        </div>

        <div className='row mb-4'>
          <div className='col-sm-6'>
            <button type='button' className='btn btn-orange btn-lg'>
              Save and Continue
            </button>
          </div>
          <div className='col-sm-4'></div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfoForm;
