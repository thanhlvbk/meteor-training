Meteor.subscribe("posts");

Template.posts.helpers({
    posts: function(){
        return PostsCollection.find();
    }
})