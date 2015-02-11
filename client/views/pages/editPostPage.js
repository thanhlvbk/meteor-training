Meteor.subscribe("posts");

Template.editPost.helpers({
    post: function(){
        return PostsCollection.findOne(Session.get('postId'))
    }
})

Template.editPost.events({ 
    'click .save-post': function(evt, tmp){
        evt.preventDefault();
        var id = PostsCollection.update(
            Session.get('postId'),
            {$set:{
                title: tmp.find('#inputTitle').value,
                body: tmp.find('#inputContent').value,
                tags: tmp.find('#inputTags').value.split(","),
                createdAt: moment(Date()).format('MMMM-DD-YYYY')
            }}
        );
        Router.go('main');
        return id;
    },

})