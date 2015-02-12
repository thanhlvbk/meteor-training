Meteor.subscribe("posts");

Template.tag.helpers({
    posts: function(){
        return PostsCollection.find(Session.get('postId'));
    },
});