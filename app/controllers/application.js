import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class ApplicationController extends Controller {
	@action onSubmit(myTweet){



		let x= this.store.createRecord("draft-tweet",{
			
			user_name:"Natan",
			description:myTweet,
			created_at:new Date()
		});
		x.save();



	}
}


