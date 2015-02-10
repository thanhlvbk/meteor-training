Template.post.helpers({
    post: function(){
        return PostsCollection.findOne(Session.get('postId'));
    }
})