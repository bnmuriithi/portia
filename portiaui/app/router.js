import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('projects', function() {
        this.route('project', {path: ":project_id"}, function() {
            this.route('spider', {path: "spiders/:spider_id"}, function() {
                this.route('sample', {path: "samples/:sample_id"}, function() {
                  this.route('annotation', {path: "annotations/:annotation_id"});
                  this.route('item', {path: "items/:item_id"});
                });
            });
            this.route('schema', {path: "schemas/:schema_id"}, function() {
                this.route('field', {path: "fields/:field_id"});
            });
        });
    });
});

export default Router;
