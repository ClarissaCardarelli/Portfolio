interface FilterButtonsProps {
  className: string;
  text: string;
  value: string;
  handleFilterUpdate: (value: string) => void;
}

function FilterButton({
  className,
  text,
  value,
  handleFilterUpdate,
}: FilterButtonsProps) {
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
