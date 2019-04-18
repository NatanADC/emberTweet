import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object"

export default class TwitterBoxComponent extends Component {
	@tracked text;  
	@tracked error;

	@action
	onInput(value){
		this.error=false;
		this.text=value;
	}
	@action handleChange (text)
	{	
		console.log(text);
		this.text= text;
	}
	@action handleSubmit (){ 
		let newText=this.text;
		
		let req= this.args.handleSubmit(newText); 
		this.error=req.error;
		this.text= "";

	}
}
