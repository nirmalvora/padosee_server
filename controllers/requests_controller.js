// import pool queries from service
const { create, getRequests, getRequestById, getRequestsBySenderId, getRequestsByReceiverId, updateRequest, deleteRequest } = require('../services/requests_service');

// export controller
module.exports = {
    // create request
    createRequest: (req, res) => {
        // request body
        const body = req.body;

        // create request
        create(body, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    success: 0,
                    message: 'Failed to insert record...'
                });
            } else {
                res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    // get all requests
    getRequests: (req, res) => {
        // use getRequests
        getRequests((error, results) => {
            if (error) {
                console.log(error);
                return;
            } else {
                res.status(200).json({
                    success: 1, 
                    data: results
                });
            }
        });
    }, 
    // get request by id
    getRequestById: (req, res) => {
        // get params id
        const id = req.params.id;

        // use service method
        getRequestById(id, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    success: 0, 
                    message: 'Error fetching records..'
                });
            } else if (!results) {
                // not found message
                res.status(404).json({
                    success: 0, 
                    message: 'Record not found...'
                });
            } else {
                // success message
                res.status(200).json({
                    success: 1, 
                    data: results
                });
            }
        });
    },
    // get request by sender id
    getRequestsBySenderId: (req, res) => {
        // get params id
        const id = req.params.id;

        // use service method
        getRequestsBySenderId(id, (error, results) => {
            if (error) {
                // handle error
                console.log(error);
                res.status(500).json({
                    success: 0, 
                    message: 'Error fetching records...'
                });
            } else if (results.length === 0) {
                // not found message
                res.status(404).json({
                    success: 0, 
                    message: 'Record not found...'
                });
            } else {
                // success message
                res.status(200).json({
                    success: 1, 
                    data: results
                });
            }
        });
    },
    // get request by receiver id
    getRequestsByReceiverId: (req, res) => {
        // get id from params
        const id = req.params.id;

        // use service method
        getRequestsByReceiverId(id, (error, results) => {
            if (error) {
                // handle error
                console.log(error);
                res.status(500).json({
                    success: 0,
                    message: 'Error fetching records...'
                });
            } else if (results.length === 0) {
                res.status(404).json({
                    success: 0, 
                    message: 'Record not found...'
                });
            } else {
                res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    // update request
    updateRequest: (req, res) => {
        // get id from params
        const id = req.params.id;

        // get body of request
        const body = req.body;

        // use service method
        updateRequest(id, body, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    success: 0,
                    message: 'Failed to update record...'
                });
            } else {
                res.status(200).json({
                    success: 1, 
                    message: 'Request updated successfully!'
                });
            }
        });
    }, 
    // delete request
    deleteRequest: (req, res) => {
        // get id from params
        const id = req.params.id;

        // use service method
        deleteRequest(id, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    success: 0, 
                    message: 'Failed to delete record...'
                });
            } else {
                res.status(200).json({
                    success: 1,
                    message: 'Request deleted successfully!'
                });
            }
        });
    }
}
