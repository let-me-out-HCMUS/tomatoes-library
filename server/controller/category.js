exports.GetAllCategories = async function(req, res, next) {
    try {
        // TODO: handle all here

    } catch (error) {
        res.status(400).json({
            "status": "failed",
            "message": error.message
        })
    }
}