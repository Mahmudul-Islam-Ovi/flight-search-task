import { useEffect, useState } from "react";

const useData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const textFileResponse = await fetch(
          "/src/data/LHR_CDG_ADT1_TYPE_1.txt"
        );
        const textFileContent = await textFileResponse.text();

        const parsedData = JSON.parse(textFileContent);

        setData(parsedData.flightOffer);
      } catch (error) {
        console.error("Error fetching and parsing data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

export default useData;
