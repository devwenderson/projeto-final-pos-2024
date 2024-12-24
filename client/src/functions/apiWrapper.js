class ApiWrapper {
    baseUrl = 'http://127.0.0.1:8000/api'
    
    async request (endpoint, method = 'GET', body = null) {
        try {
            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
            if (!response.ok) {
                throw new Error(`Response error: ${response.status}`)
            }
            return response.json()
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    // List all
    async listAll (endpoint) {
        return this.request(endpoint = endpoint)
    } 

    // Create
    async create (endpoint, data) {
        return this.request(endpoint = endpoint, method = 'POST', body = data)
    }

    // Update
    async update (endpoint, id, data) {
        return this.request(endpoint = `${endpoint}${id}`, method = 'PUT', body = data)
    }

    // Delete
    async delete (endpoint, id) {
        return this.request(endpoint = `${endpoint}${id}`, method = 'DELETE')
    }
}

export default ApiWrapper