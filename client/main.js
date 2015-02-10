Meteor.startup(function(){
    
});


Template.posts.helpers({
    posts: function(){
        return PostsCollection.find();
    }
})

Template.post.helpers({
    post: function(){
        return PostsCollection.findOne(Session.get('postId'));
    }
})

Template.posts.events({
    'click .new-post': function(evt, tmp){
        evt.preventDefault();
        Router.go('creatPost');
    }
})

Template.creatPost.events({ 
    'click .save-post': function(evt, tmp){
        evt.preventDefault();
        var id = PostsCollection.insert({
            title: tmp.find('#inputTitle').value,
            body: tmp.find('#inputContent').value,
            createdAt: moment(Date()).format('MMMM-DD-YYYY')
        });
        Router.go('main');
        return id;
    },

})