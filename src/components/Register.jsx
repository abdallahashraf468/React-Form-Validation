import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import passwordRegexp from 'password-regexp';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const handleForm = (evt) => {
    const { name, value } = evt.target;
    let error = '';

    switch (name) {
      case 'name':
        error = value.length === 0 ? 'Name is required' : '';
        break;

      case 'username':
        error =
          value.length === 0
            ? 'Username is required'
            : /\s/.test(value)
            ? 'Please enter username without spaces'
            : '';
        break;

      case 'email':
        error =
          value.length === 0
            ? 'Email is required'
            : EmailValidator.validate(value)
            ? ''
            : 'Please enter a valid email address';
        break;

      case 'password':
        error =
          value.length === 0
            ? 'Password is required'
            : passwordRegexp().test(value)
            ? ''
            : 'Password must be at least 3 characters and contain at least one uppercase or lowercase letter';
        break;

      case 'confirmpassword':
        error =
          value.length === 0
            ? 'Confirm Password is required'
            : value === user.password
            ? ''
            : 'Passwords do not match';
        break;

      default:
        break;
    }

    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [`${name}Error`]: error });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div className="mt-5 mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.nameError && 'border-danger shadow-none'}`}
            id="name"
            name="name"
            value={user.name}
            onChange={handleForm}
          />
          <p style={{ color: 'red' }}>{errors.nameError}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={user.username}
            onChange={handleForm}
          />
          <p style={{ color: 'red' }}>{errors.usernameError}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleForm}
          />
          <p style={{ color: 'red' }}>{errors.emailError}</p>
        </div>

        <div className="mt-5 mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className={`form-control ${errors.passwordError && 'border-danger shadow-none'}`}
            id="password"
            name="password"
            value={user.password}
            onChange={handleForm}
          />
          <p style={{ color: 'red' }}>{errors.passwordError}</p>
        </div>

        <div className="mt-5 mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className={`form-control ${errors.confirmpasswordError && ' shadow-none'}`}
            id="confirmpassword"
            name="confirmpassword"
            value={user.confirmpassword}
            onChange={handleForm}
          />
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <p style={{ color: 'red' }}>{errors.confirmpasswordError}</p>
        </div>
      </form>
    </>
  );
};

export default Register;
