class UserWrapper {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
    }

    // Get Users
    async getUsers () {
        try {
            const response = await fetch(`${this.baseUrl}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            return response.json();
        } catch (error) {
            console.error('Erro: ', error)
        }
    } 
}

export default UserWrapper