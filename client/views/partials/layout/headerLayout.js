Template.header.events({
    'click .new-post': function(evt, tmp){
        evt.preventDefault();
        Router.go('creatPost');
    }
})