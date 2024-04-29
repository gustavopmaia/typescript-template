type InputFieldProps = {
  label: string
  type: string
  id: string
  name: string
  value?: string
  onChange?: any
}

export function InputField({ label, type, id, name, value, onChange }: InputFieldProps) {
  return (
    <>
      <input
        className='w-1/3 h-20 text-zinc-900 rounded p-2 mb-5 mt-5'
        type={type}
        placeholder={label}
        id={id}
        name={name}
        value={value ? value : value}
        onChange={onChange ? onChange : onChange}
      />
    </>
  )
}
