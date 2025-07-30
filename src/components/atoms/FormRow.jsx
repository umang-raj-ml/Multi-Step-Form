
const FormRow = ({columns = 1, children}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {children}
    </div>
  )
}

export default FormRow