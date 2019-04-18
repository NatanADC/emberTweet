import DS from 'ember-data';
const { Model, attr } = DS;

export default class DraftTweetModel extends Model {
	@attr("string") description;
	@attr("string") user_name;
	@attr("string") created_at;
	@attr("string") avatar;
}
