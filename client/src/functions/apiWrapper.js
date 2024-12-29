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
            if (body) { options.body = JSON.stringify(body) }

            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
         
            if (!response.ok) {
                const errorResponse = await response.json();
                throw { success: false, message: errorResponse.message, status: response.status };
            }
            const data = await response.json()
            return { success: true, data: data, status: response.status };
        } catch (error) {                       
            return error
        }
    }

    // List all
    async listAll (endpoint) {
        return this.request(endpoint)
    } 

    // Detail
    async detail (endpoint, id) {
        return this.request(`${endpoint}${id}/`)
    }

    // Create
    async create (endpoint, data) {
        return this.request(endpoint, 'POST', data)
    }

    // Update
    async update (endpoint, id, data) {
        return this.request(`${endpoint}${id}/`, 'PUT', data)
    }

    // Delete
    async delete (endpoint, id) {
        return this.request(`${endpoint}${id}/`, 'DELETE')
    }
}

export default ApiWrapper