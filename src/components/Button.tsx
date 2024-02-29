interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({ type = 'button', children, ...rest }) => {
  return (
    <button
      type={type}
      className='bg-[#2e68b1] px-5 py-2 text-white duration-150 active:shadow-lg disabled:opacity-50'
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
