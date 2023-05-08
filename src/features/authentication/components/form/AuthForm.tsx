import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../../../servises/firebase';

type AuthFormValues = {
  name: string;
  email: string;
  password: string;
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
    if (user) console.log('user', user);
  }, [user, loading]);

  const onSubmit: SubmitHandler<Partial<AuthFormValues>> = (data) => {
    console.log(data);
    if (isLogin) {
      if (data.email && data.password) {
        logInWithEmailAndPassword(data.email, data.password);
      }
    } else {
      if (data.name && data.email && data.password) {
        registerWithEmailAndPassword(data.name, data.email, data.password);
      }
    }
    reset();
  };
  return (
    <div className="auth-form-wrapper">
      <form className="form mx-auto w-72" onSubmit={handleSubmit(onSubmit)} noValidate>
        <ul className="flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500">
          <li className="mr-2" onClick={() => setIsLogin(true)}>
            <a
              href="#"
              className={`inline-block rounded-t-md  p-4 ${
                isLogin
                  ? 'active bg-gray-100 text-indigo-600 '
                  : ' hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              Login
            </a>
          </li>
          <li className="mr-2" onClick={() => setIsLogin(false)}>
            <a
              href="#"
              className={`inline-block rounded-t-md p-4  ${
                !isLogin
                  ? 'active bg-gray-100 text-indigo-600 '
                  : ' hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              Registeration
            </a>
          </li>
        </ul>
        {!isLogin && (
          <label className="mt-3 block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              placeholder="Johnny Cage"
              className={`form-input ${errors?.name ? 'error' : ''}`}
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[а-яА-ЯёЁa-zA-Z]+(([',. -][а-яА-ЯёЁa-zA-Z ])?[а-яА-ЯёЁa-zA-Z]*)*$/,
                  message: 'Name is not valid',
                },
              })}
            />
            <p className="mt-3 text-red-500">{errors?.name?.message?.toString()}</p>
          </label>
        )}
        <label className="mt-3 block">
          <span className="text-gray-700">Email address</span>
          <input
            type="email"
            placeholder="johnny@example.com"
            className={`form-input ${errors?.email ? 'error' : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid',
              },
            })}
          />
          <p className="mt-3 text-red-500">{errors?.email?.message?.toString()}</p>
        </label>
        <label className="mt-3 block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            placeholder="password"
            className={`form-input ${errors?.password ? 'error' : ''}`}
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  'Password shuld be - minimum 8 symbols, at least one letter, one digit, one special character',
              },
            })}
          />
          <p className="mt-3 text-red-500">{errors?.password?.message?.toString()}</p>
        </label>
        <button className="btn my-3" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
