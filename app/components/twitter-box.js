import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TwitterBoxComponent extends Component {
  @tracked text;
  @tracked error;

  @action
  handleChange(text){
    this.text = text;
    this.error = false;
  }

  @action
  async handleSubmit() {
    // if(this.args.onSubmit) {
      let newText = this.text;
      let req = await this.args.onSubmit(newText);
      this.error = req.error;
      this.text = '';
    // }
    // else
    //  alert('handleSubmit');  
  } 
}
