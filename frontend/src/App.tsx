import { useEffect, useState } from "react";
import { getHealth } from "./services/health.service";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchHealth() {
            try {
                const data = await getHealth();
                setMessage(data.message);
            } catch (error) {
                console.error(error);
            }
        }

        fetchHealth();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;