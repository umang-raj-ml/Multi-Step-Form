

const FormRow = ({ columns = 1, children }) => {

  const colClass = columns === 2
    ? "grid-cols-1 md:grid-cols-2"
    : columns === 3
    ? "grid-cols-1 md:grid-cols-3"
    : "grid-cols-1";
  return (
    <div className={`grid ${colClass} gap-4`}>
      {children}
    </div>
  );
}

export default FormRow