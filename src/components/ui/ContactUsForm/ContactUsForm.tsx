import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import scss from './ContactUsForm.module.scss';
// import { toast } from 'react-hot-toast';

const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Wrong Fullname' }).trim(),
  email: z.string().email().min(5, { message: 'Wrong Email' }).trim(),
  phone: z.string().min(7, { message: 'Wrong Phone' }).trim(),
  message: z.string().trim().optional(),
});
type ContactUsFormValues = z.infer<typeof formSchema>;

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormValues>({
    resolver: zodResolver(formSchema.required()),
  });

  const onSubmit = (data: ContactUsFormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
      <div className={scss.inputWrapper}>
        <label htmlFor="fullName">Full name:</label>
        <input
          {...register('fullName')}
          placeholder="My full name ..."
          aria-invalid={errors.fullName ? 'true' : 'false'}
        />
        {errors.fullName && (
          <p className={scss.errorMsg} role="alert">
            Wrong Full name
          </p>
        )}
      </div>

      <div className={scss.inputWrapper}>
        <label htmlFor="email">E-mail:</label>
        <input
          {...register('email')}
          placeholder="My e-mail ..."
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className={scss.errorMsg} role="alert">
            Wrong Email
          </p>
        )}
      </div>

      <div className={scss.inputWrapper}>
        <label htmlFor="phone">Phone:</label>
        <input
          {...register('phone')}
          aria-invalid={errors.phone ? 'true' : 'false'}
          placeholder="My phone ..."
        />
        {errors.phone && (
          <p className={scss.errorMsg} role="alert">
            Wrong Phone
          </p>
        )}
      </div>

      <div className={scss.inputWrapper}>
        <label htmlFor="message">Message:</label>
        <textarea
          {...register('message')}
          rows={7}
          placeholder="My message ..."
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className={scss.errorMsg} role="alert">
            Wrong Message
          </p>
        )}
      </div>
      <button type="submit">
        Send
        {/* <span className={scss.arrowIcon} aria-label="Arrow right" /> */}
        <ArrowIcon className={scss.arrowIcon} aria-label="arrow down" />
      </button>
    </form>
  );
};

export default ContactUsForm;
