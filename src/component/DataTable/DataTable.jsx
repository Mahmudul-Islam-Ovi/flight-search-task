import useData from "../../hooks/useData";

const DataTable = () => {
  const { loading, data } = useData();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-xl font-bold mb-4">Dta parsed successfully</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">FLIGHT</th>
              <th className="px-4 py-2">AIRCRAFT</th>
              <th className="px-4 py-2">CLASS</th>
              <th className="px-4 py-2">FARE</th>
              <th className="px-4 py-2">ROUTE</th>
              <th className="px-4 py-2">DEPARTURE</th>
              <th className="px-4 py-2">ARRIVAL</th>
              <th className="px-4 py-2">DURATION</th>
              <th className="px-4 py-2">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((flight, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].segments
                    .map(
                      (segment) =>
                        segment.marketingCarrier + " " + segment.flightNumber
                    )
                    .join(", ")}
                </td>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].segments
                    .map((segment) => segment.aircraft)
                    .join(", ")}
                </td>
                <td className="border px-4 py-2">{flight.class.join(", ")}</td>
                <td className="border px-4 py-2">
                  {flight.fareBasis.join(", ")}
                </td>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].segments
                    .map(
                      (segment) =>
                        segment.departure.iataCode +
                        "-" +
                        segment.arrival.iataCode
                    )
                    .join(", ")}
                </td>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].segments
                    .map((segment) => segment.departure.at)
                    .join(", ")}
                </td>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].segments
                    .map((segment) => segment.arrival.at)
                    .join(", ")}
                </td>
                <td className="border px-4 py-2">
                  {flight.itineraries[0].duration}
                </td>
                <td className="border px-4 py-2">
                  {flight.price}
                  <button className="btn mt-1 btn-sm btn-primary">
                    SELECT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
