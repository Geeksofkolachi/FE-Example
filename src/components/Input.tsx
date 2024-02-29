const Input: React.FC<React.ComponentPropsWithoutRef<'input'>> = ({
  type = 'text',
  ...rest
}) => {
  return (
    <div className='relative max-w-xs'>
      <input
        type={type}
        className='w-full border bg-transparent p-2 text-sm text-gray-500 shadow-sm outline-none placeholder:text-sm focus:border-indigo-600 disabled:opacity-50'
        {...rest}
      />
    </div>
  );
};

export default Input;
