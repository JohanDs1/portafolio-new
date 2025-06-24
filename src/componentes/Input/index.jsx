const Input = ({
  type = 'text',
  placeholder = "",
  label = "",
  name = "",
  onFocus,
  onBlur,
  value,
  onChange,
  required = false,
  isFocused = false,
  error = false,
  messageError = '',
  onKeyUp = false,
  pattern = ''
}) => {
  return (
    <label
      className={`transition-colors text-sm ${error ? 'text-red-400 dark:text-red-600'
        : isFocused ? 'text-blue-400'
          : 'text-slate-700 dark:text-slate-100'
        }`}

    >
      {label}
      {
        type === 'textarea'
          ?
          <textarea
            name={name}
            cols="30"
            rows="3"
            className={`resize-none bg-transparent border-b ${error ? 'border-red-400 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'} p-2 text-slate-700 dark:text-slate-100`}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            required={required}
            onKeyUp={onKeyUp}
            pattern={pattern}
          />
          :
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            required={required}
            pattern={type !== 'email' && pattern}
            className={`bg-transparent border-b ${error ? 'border-red-400 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'} p-2 text-slate-700 dark:text-slate-100`}

          />
      }
      {
        error
          ? <span className="text-red-400 dark:text-red-600">{messageError}</span>
          : <div className="h-5"></div>
      }


    </label>
  );
};

export default Input;
