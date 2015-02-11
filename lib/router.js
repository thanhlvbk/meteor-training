/**
 * Set up router
 */
Router.configure({
    layoutTemplate: 'applicationLayout'
});

Router.route('/',function(){
    this.render('posts');
}, {name: 'main'});

Router.route('/post/:_id',function(){
    Session.set('postId', this.params._id);
    this.render('post');
}, {name: 'post'});

Router.route('/creatPost', {
    onBeforeAction: function(){
        if(Meteor.user()){
            this.next();
        }
        else
            Router.go('main');
    },
    action: function(){
        this.render('creatPost');
    }
}, {name: 'creatPost'});

Router.route('/editPost/:_id',function(){
    Session.set('postId', this.params._id);
    this.render('editPost');
}, {name: 'editPost'});

