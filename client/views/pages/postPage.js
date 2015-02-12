Meteor.subscribe("posts");

Template.post.helpers({
    post: function(){
        return PostsCollection.findOne(Session.get('postId'));
    },
    getAuthor: function(){
        var author = Users.findOne(this.userId);
        if(author)
            return author.username;
        return 'anymous';
    }
});

Template.post.events({
    'click .delete-post':function(evt, tmp){
        evt.preventDefault();
        var remove = PostsCollection.remove(this._id);
        Router.go('main');
        return remove;
    },
    'click .tag': function(evt, tmp){
        evt.preventDefault();
        console.log(this);
    }
})