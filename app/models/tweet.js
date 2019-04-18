import DS from 'ember-data';
const { Model, attr } = DS; //data store

export default class TweetModel extends Model {
	@attr("string") description;
	@attr("string")userName;
	@attr("string")avatar;
	//P@attr("")created_at;
}
