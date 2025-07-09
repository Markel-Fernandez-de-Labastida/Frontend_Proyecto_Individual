

const [token, setToken] = useState('');

useEffect(() => {

    const getToken = async () => {
        const response = await fetch('${import.meta.env.VITE_BACKEND_URL}/api/v1/spotify/token');
        const json = await response.json();
        setToken(json.access_token);
    }

    getToken();

}, []);