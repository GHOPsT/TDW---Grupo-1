import { useEffect, useState } from "react";

function useForumData() {
    const [forums, setForums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/data/onlyForum.json");
                if (!response.ok) {
                    throw new Error("Error al cargar los datos del foro");
                }
                const data = await response.json();
                setForums(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { forums, loading, error };
}

export default useForumData;
