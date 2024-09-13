type Props = {
  numberOfSeats: number;
};

export const Seats = (props: Props) => {
  let seats = [];
  for (let i = 0; i < props.numberOfSeats; i++) {
    seats.push(<div className="w-6 min-h-6 bg-blue-500" key={i}></div>);
  }
  return <div className="flex items-center justify-evenly">{seats}</div>;
};
