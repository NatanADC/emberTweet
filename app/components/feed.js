import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";


export default class FeedComponent extends Component {
	
	@tracked tweets=
		this.args.tweets|| []
	;
	//typescript define què tipo de cosa es cada cosa, o proptypes
}
