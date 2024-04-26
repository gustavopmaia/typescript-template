type InputFieldProps = {
  label: string
  type: string
  id: string
  name: string
}

export function InputField({ label, type, id, name }: InputFieldProps) {
  return (
    <>
      <input
        className='w-1/3 h-20 text-zinc-900 rounded p-2 mb-5 mt-5'
        type={type}
        placeholder={label}
        id={id}
        name={name}
      />
    </>
  )
}
