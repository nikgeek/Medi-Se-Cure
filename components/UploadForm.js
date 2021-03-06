import react, {Component} from 'react';
import FileInstance from '../ethereum/fileinstance';
import {Form,Input,Message,Button, Icon} from 'semantic-ui-react';
import ipfs from '../ipfs/ipfs';
import web3 from '../ethereum/web3';


class UploadForm extends Component{
  state={
    file : null,
    loading : false,
    errorMessage : '',
    fileBuffer : null,
    fileHash : '',
    name: ''
  }

  onChange = async (event) =>{
    const file = event.target.files[0];
    this.setState({ file });
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = async () =>{
      const fileBuffer = await Buffer.from(reader.result);
      console.log(fileBuffer);
      this.setState({fileBuffer});
    }
  }
  onAdd = async (event) =>{
    event.preventDefault();
    //this.setState({loadinga:true});
    await ipfs.add(this.state.fileBuffer, (err, hashID) => {
      console.log(hashID);
      this.setState({ fileHash:hashID[0].hash });
      console.log(this.state.fileHash);
    });
    //  this.setState({loadinga:false});
  }

  onSubmit = async (event) =>{
      event.preventDefault();
      /*await ipfs.add(this.state.fileBuffer, (err, hashID) => {
        console.log(hashID);
        this.setState({ fileHash:hashID[0].hash });
        console.log(this.state.fileHash);
      });*/
      const fileInstance = FileInstance(this.props.address);
      this.setState({loading: true, errorMessage:''});
      try{
        const accounts = await web3.eth.getAccounts();

        await fileInstance.methods.addNewVersion(this.state.fileHash,this.state.name).send({
          from:accounts[0]
        });
      }catch(err){
        this.setState({errorMessage:err.message});
      }
      this.setState({loading:false});
  }

  render(){
    return(
      <Form onSubmit={this.onSubmit} error = {!!this.state.errorMessage}>
        <Form.Field>
          <label>Your Name</label>
          <Input placeholder='Your Name' value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}}/>
          <label>Upload updated file</label>
          <Input
           type='file'
           onChange = {this.onChange}
          />
          <Button inverted color='blue' icon labelPosition='left' onClick={this.onAdd}>
            <Icon name='upload'/>
            Upload
          </Button>
        </Form.Field>
        <Message error heading='Oops!' content={this.state.errorMessage} />
        <Button inverted color='purple' icon labelPosition='left' loading = {this.state.loading}><Icon name='certificate'/>Update</Button>
      </Form>
    );
  }
}

export default UploadForm;
