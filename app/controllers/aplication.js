import Controller from '@ember/controller';
import { action } from '@ember/object';
//import { tracked } from '@glimmer/tracking';


export default class AplicationController extends Controller {
	@action
	onSubmit(text) {
		let newTweet = {
			createdAt: new Date(),
			description: text,
			userName: "Natan"
		}
		this.store.createRecord('draftTweet', newTweet).save();
	}
}
