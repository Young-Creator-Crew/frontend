async function login(email, password) {

    try {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.status === 200) {
            return response.status;
        }

        if (response.status === 401) {
            return response.status;
        }

        if (response.status === 422) {
            return response.status;
        }

        if (response.status === 500) {
            return response.status;
        }

    } catch (error) {
        console.log("Não foi possível conectar com a API");
    }
}

export default login;