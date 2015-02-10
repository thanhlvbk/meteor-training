Template.posts.helpers({
    posts: function(){
        return PostsCollection.find();
    }
})