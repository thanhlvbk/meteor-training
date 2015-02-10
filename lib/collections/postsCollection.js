PostsCollection = new Mongo.Collection("posts");

Meteor.startup(function(){
    if(!PostsCollection.findOne({_id: 'test'})) {
        PostsCollection.insert({
            _id: "test",
            title: "First Impressions using React Native",
            body: "Facebook gave all attendees of React Conf early access to the source code of React Native, a new way to write native mobile apps. The technology takes everything that's great about React.js and applies it to native apps. You write JavaScript components using a set of builtin primitives that are backed by actual native iOS or Android components.",
            createdAt: moment(Date()).format('MMMM-DD-YYYY'),
            updatedAt: moment(Date()).format('MMMM-DD-YYYY')
        });
    }    
});