Meteor.subscribe("posts");

Template.creatPost.events({ 
    'click .save-post': function(evt, tmp){
        evt.preventDefault();
        var id = PostsCollection.insert({
            title: tmp.find('#inputTitle').value,
            body: tmp.find('#inputContent').value,
            tags: tmp.find('#inputTags').value.split(","),
            createdAt: moment(Date()).format('MMMM-DD-YYYY')
        });
        Router.go('main');
        return id;
    },

})