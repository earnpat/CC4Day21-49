module.exports = (sequelixe, DataType) => {
    const post = sequelixe.define('post', {
        message: {
            type: DataType.STRING(500)
        },
        img_url: {
            type: DataType.STRING(500)
        }
    })
    
    return post
}