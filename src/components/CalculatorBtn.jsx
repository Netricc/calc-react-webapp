const CalculatorBtn = (props) => {
  return (
    <button
      className="py-6 px-6 bg-white text-2xl text-orange-600 font-medium hover:bg-orange-700 hover:text-white active:scale-90 translition-color"
      key={props.id}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default CalculatorBtn;
