import { FC, useEffect, useState } from "react";

type GlobalFilterProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
  count?: number;
};

const GlobalFilter: FC<
  GlobalFilterProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
> = ({ value: initialValue, onChange, debounce = 500, count, ...props }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">Search: </span>
      <input
        {...props}
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </label>
  );
};

export default GlobalFilter;
