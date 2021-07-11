import React, { Component, ReactElement, ReactNode } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

interface StepperProps {
  activeStep: number;
  options: {
    label: string;
    link: string;
    component: any;
    step: number;
  }[];
}

const Stepper = (props: StepperProps) => {
  return (
    <div>
      <nav className='stepper aln-vertical'>
        <ol className='stepper-list'>
          {props.options.map((option) => (
            <li
              className={
                option.step <= props.activeStep
                  ? "stepper-item active"
                  : "stepper-item"
              }
              aria-current='page'
            >
              <NavLink
                key={option.link}
                to={option.link}
                activeClassName='active'
              >
                {option.label}
              </NavLink>
            </li>
          ))}
          <Switch>
            {props.options.map((option) => (
              <Route key={option.link} path={option.link} {...option} />
            ))}
          </Switch>
        </ol>
      </nav>
    </div>
  );
};

export default Stepper;
