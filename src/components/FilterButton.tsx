function FilterButton({ className, text, value, handleFilterUpdate }) {
  return (
    <button
      className={className}
      onClick={() => {
        handleFilterUpdate(value);
      }}
    >
      {text}
    </button>
  );
}

export default FilterButton;
