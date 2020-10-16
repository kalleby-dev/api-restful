const getAll = (req, res) => {
    return {"data": "Get test"};
};

const save = () => {
    return {"data": "Post test"};
};

module.exports = {
    getAll,
    save
}