
module.exports = function(app) 
{
    var Comment    = require('../models/comment');

    app.route('/comments')
        .post(function(req, res) {
            console.log(req.body);
            var comment = new Comment();  
            comment.name = req.body.name;  
            comment.save(function(err) {
                if (err)
                    return res.send(err);

                res.json({ message: 'Comment created!' });
            });
            
        })
        .get(function(req, res) {
            Comment.find(function(err, comments) {
                if (err)
                    return res.send(err);

                res.json(comments);
        });
    });
    app.route('/comments/:comment_id')
        .get(function(req, res) {
            Comment.findById(req.params.comment_id, function(err, comment) {
                if (err)
                    return res.send(err);
                res.json(comment);
            });
        })

        .delete(function(req, res) {
            Comment.remove({
                _id: req.params.comment_id
            }, function(err, comment) {
                if (err)
                    return res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        })

        .put(function(req, res) {
            console.log(req.params.comment_id);
            Comment.findById(req.params.comment_id, function(err, comment) {

                if (err)
                    return res.send(err);

                comment.name = req.body.name;  

                comment.save(function(err) {
                    if (err)
                        return res.send(err);

                    res.json({ message: 'Comment updated!' });
                });

            });
        });
};