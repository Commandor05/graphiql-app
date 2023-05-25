import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../../../servises/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hooks';
import classNames from 'classnames';

type AuthFormValues = {
  name: string;
  email: string;
  password: string;
};

const AuthForm = () => {
  const location = useLocation();
  const isRegister = location.state?.isRegister;
  const [isLogin, setIsLogin] = useState(!isRegister);
  const { t } = useTranslation();
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  useEffect(() => {
    const focusField = isLogin ? 'email' : 'name';
    setFocus(focusField);
  }, [isLogin, setFocus]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit: SubmitHandler<Partial<AuthFormValues>> = (data) => {
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
              {t('login-title')}
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
              {t('registration-title')}
            </a>
          </li>
        </ul>
        {!isLogin && (
          <label className="mt-3 block">
            <span className="text-gray-700">{t('labels.full_name')}</span>
            <input
              type="text"
              placeholder="Johnny Cage"
              className={`form-input ${errors?.name ? 'error' : ''}`}
              {...register('name', {
                required: t('validations.name_required').toString(),
                pattern: {
                  value: /^[а-яА-ЯёЁa-zA-Z]+(([',. -][а-яА-ЯёЁa-zA-Z ])?[а-яА-ЯёЁa-zA-Z]*)*$/,
                  message: t('validations.name_not_valid'),
                },
              })}
            />
            <p className="mt-3 text-red-500">{errors?.name?.message?.toString()}</p>
          </label>
        )}
        <label className="mt-3 block">
          <span className="text-gray-700">{t('labels.email')}</span>
          <input
            type="email"
            placeholder="johnny@example.com"
            className={`form-input ${errors?.email ? 'error' : ''}`}
            {...register('email', {
              required: t('validations.email_required').toString(),
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: t('validations.email_not_valid'),
              },
            })}
          />
          <p className="mt-3 text-red-500">{errors?.email?.message?.toString()}</p>
        </label>
        <label className="mt-3 block">
          <span className="text-gray-700">{t('labels.password')}</span>
          <input
            type="password"
            placeholder="password"
            className={`form-input ${errors?.password ? 'error' : ''}`}
            {...register('password', {
              required: t('validations.password_required').toString(),
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: t('validations.password_not_valid'),
              },
            })}
          />
          <p className="mt-3 text-red-500">{errors?.password?.message?.toString()}</p>
        </label>
        <button
          disabled={isAuthenticated}
          className={classNames('btn btn_color my-3', { 'btn-disabled': isAuthenticated })}
          type="submit"
        >
          {isLogin ? t('login') : t('register')}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
